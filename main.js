const { app, BrowserWindow, Menu, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const https = require('https');
const fs = require('fs');
const os = require('os');
const DiscordRPC = require('discord-rpc');

let mainWindow;
let settingsWindow;
let updateWindow;
let discordClient = null;
let discordConnected = false;
let updateAvailable = false;

const APP_VERSION = fs.readFileSync(path.join(__dirname, 'version.txt'), 'utf8').trim();
const DISCORD_CLIENT_ID = '1442337181208281239';

function initDiscordRPC() {
  if (discordClient) return Promise.resolve(true);
  
  return new Promise((resolve) => {
    discordClient = new DiscordRPC.Client({ transport: 'ipc' });
    
    const timeout = setTimeout(() => {
      console.error('Discord RPC connection timeout');
      discordConnected = false;
      discordClient = null;
      resolve(false);
    }, 10000); // 10 second timeout
    
    discordClient.on('ready', () => {
      clearTimeout(timeout);
      console.log('Discord RPC connected');
      discordConnected = true;
      updateDiscordPresence();
      resolve(true);
    });
    
    discordClient.login({ clientId: DISCORD_CLIENT_ID }).catch(err => {
      clearTimeout(timeout);
      console.error('Failed to connect to Discord:', err);
      discordConnected = false;
      discordClient = null;
      resolve(false);
    });
  });
}

function updateDiscordPresence() {
  if (!discordClient || !discordConnected) return;
  
  discordClient.setActivity({
    details: 'Coding On GaiaMod',
    state: 'Building something awesome',
    startTimestamp: Date.now(),
    largeImageKey: 'gaiamod_logo',
    largeImageText: 'GaiaMod',
    instance: false,
  }).catch(err => {
    console.error('Failed to set Discord activity:', err);
  });
}

function disconnectDiscordRPC() {
  if (discordClient && discordConnected) {
    discordClient.clearActivity();
    discordClient.destroy();
    discordClient = null;
    discordConnected = false;
    console.log('Discord RPC disconnected');
  }
}

function updateSettingsIcon(hasUpdate) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  
  const icon = hasUpdate ? '⚠️' : '⚙️';
  mainWindow.webContents.executeJavaScript(`
    (function() {
      const settingsBtn = document.querySelector('[data-settings-btn]');
      if (settingsBtn) {
        settingsBtn.textContent = '${icon}';
      }
    })();
  `);
}

function detectPlatformAndFile(version) {
  const platform = process.platform;
  const arch = process.arch;
  
  // Check if running as Flatpak
  const isFlatpak = process.env.FLATPAK_ID || fs.existsSync('/.flatpak-info');
  
  if (isFlatpak) {
    return {
      isFlatpak: true,
      url: 'https://gaiamod-main.github.io/GaiaMod-Desktop-New/',
      fileName: null
    };
  }
  
  let fileName = '';
  
  if (platform === 'win32') {
    fileName = `Gaia.Mod.Setup.${version}.exe`;
  } else if (platform === 'darwin') {
    if (arch === 'arm64') {
      fileName = `Gaia.Mod-${version}-arm64.dmg`;
    } else {
      fileName = `Gaia.Mod-${version}.dmg`;
    }
  } else if (platform === 'linux') {
    if (arch === 'arm64') {
      fileName = `Gaia.Mod-${version}-arm64.AppImage`;
    } else {
      fileName = `Gaia.Mod-${version}.AppImage`;
    }
  }
  
  return {
    isFlatpak: false,
    fileName: fileName,
    url: `https://github.com/GaiaMod-Main/GaiaMod-Desktop-New/releases/download/v${version}/${fileName}`
  };
}

function downloadFile(url, destPath, progressCallback) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        file.close();
        fs.unlinkSync(destPath);
        return downloadFile(response.headers.location, destPath, progressCallback)
          .then(resolve)
          .catch(reject);
      }
      
      const totalSize = parseInt(response.headers['content-length'], 10);
      let downloadedSize = 0;
      
      response.on('data', (chunk) => {
        downloadedSize += chunk.length;
        if (progressCallback && totalSize) {
          const percent = (downloadedSize / totalSize) * 100;
          progressCallback(percent);
        }
      });
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve(destPath);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

function createUpdateWindow(latestVersion) {
  if (updateWindow) {
    updateWindow.focus();
    return;
  }

  updateWindow = new BrowserWindow({
    width: 500,
    height: 550,
    parent: mainWindow,
    modal: true,
    frame: true,
    resizable: true,
    minWidth: 400,
    minHeight: 400,
    icon: path.join(__dirname, 'assets/icons/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  Menu.setApplicationMenu(null);
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Update Available</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: rgb(41, 41, 41);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 20px;
        }
        .container {
          background: rgb(44, 44, 44);
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          padding: 30px;
          text-align: center;
          width: 100%;
          max-width: 450px;
        }
        h1 {
          color: #ffffff;
          margin-bottom: 15px;
          font-size: 24px;
        }
        .icon {
          font-size: 48px;
          margin-bottom: 15px;
        }
        .version {
          background: #3a3a3a;
          padding: 10px;
          border-radius: 6px;
          margin-bottom: 25px;
          color: #ffffff;
          font-weight: bold;
          font-size: 18px;
        }
        .button-group {
          display: flex;
          gap: 12px;
          flex-direction: column;
        }
        button {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .btn-primary {
          background: #3700ff;
          color: white;
        }
        .btn-primary:hover {
          background: #741dff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        .btn-auto {
          background: #00c853;
          color: white;
        }
        .btn-auto:hover {
          background: #00e676;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 200, 83, 0.4);
        }
        .btn-auto:disabled {
          background: #555;
          cursor: not-allowed;
          transform: none;
        }
        .btn-secondary {
          background: #3a3a3a;
          color: white;
        }
        .btn-secondary:hover {
          background: #4a4a4a;
        }
        .divider {
          display: flex;
          align-items: center;
          margin: 20px 0;
          color: #888;
          font-size: 14px;
        }
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #555;
        }
        .divider:not(:empty)::before {
          margin-right: 12px;
        }
        .divider:not(:empty)::after {
          margin-left: 12px;
        }
        .progress-container {
          display: none;
          margin-top: 15px;
        }
        .progress-bar {
          width: 100%;
          height: 8px;
          background: #3a3a3a;
          border-radius: 4px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: #00c853;
          width: 0%;
          transition: width 0.3s;
        }
        .progress-text {
          color: #c0c0c0;
          font-size: 12px;
          margin-top: 8px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="icon">⚠️</div>
        <h1>Update Available</h1>
        <div class="version">Version ${latestVersion}</div>
        <div class="button-group">
          <button class="btn-primary" onclick="downloadManual()">
            <span>⬇️</span>
            <span>Download Update</span>
          </button>
          <div class="divider">OR</div>
          <button class="btn-auto" id="autoBtn" onclick="autoDownload()">
            <span>🚀</span>
            <span>Auto Download Update</span>
          </button>
          <button class="btn-secondary" onclick="window.close()">
            Close
          </button>
        </div>
        <div class="progress-container" id="progressContainer">
          <div class="progress-bar">
            <div class="progress-fill" id="progressFill"></div>
          </div>
          <div class="progress-text" id="progressText">Downloading...</div>
        </div>
      </div>
      <script>
        function downloadManual() {
          window.electronAPI.openUrl('https://github.com/GaiaMod-Main/GaiaMod-Desktop-New/releases/tag/v${latestVersion}');
        }
        
        async function autoDownload() {
          const btn = document.getElementById('autoBtn');
          const progressContainer = document.getElementById('progressContainer');
          const progressFill = document.getElementById('progressFill');
          const progressText = document.getElementById('progressText');
          
          btn.disabled = true;
          btn.innerHTML = '<span>⏳</span><span>Starting Download...</span>';
          
          try {
            const result = await window.electronAPI.autoDownloadUpdate('${latestVersion}');
            
            if (result.success) {
              if (result.isFlatpak) {
                progressText.textContent = 'Opening download page...';
              } else {
                progressContainer.style.display = 'block';
                progressText.textContent = 'Download complete! Opening file...';
                progressFill.style.width = '100%';
              }
              setTimeout(() => window.close(), 2000);
            } else {
              btn.disabled = false;
              btn.innerHTML = '<span>❌</span><span>Download Failed</span>';
              progressText.textContent = result.error || 'Download failed';
              progressContainer.style.display = 'block';
            }
          } catch (error) {
            btn.disabled = false;
            btn.innerHTML = '<span>❌</span><span>Error</span>';
            progressText.textContent = error.message;
            progressContainer.style.display = 'block';
          }
        }
        
        // Listen for download progress
        window.electronAPI.onDownloadProgress?.((percent) => {
          const progressContainer = document.getElementById('progressContainer');
          const progressFill = document.getElementById('progressFill');
          const progressText = document.getElementById('progressText');
          
          progressContainer.style.display = 'block';
          progressFill.style.width = percent + '%';
          progressText.textContent = 'Downloading: ' + Math.round(percent) + '%';
        });
      </script>
    </body>
    </html>
  `;
  
  updateWindow.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(html));
  
  updateWindow.on('closed', () => {
    updateWindow = null;
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    frame: true,
    title: 'GaiaMod Desktop v' + APP_VERSION, 
    icon: path.join(__dirname, 'assets/icons/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      partition: 'persist:gaiamod'
    }
  });

  Menu.setApplicationMenu(null);
  const { pathToFileURL } = require('url');

  const editorPath = path.join(__dirname, 'source/editor.html');
  const editorURL = new URL(pathToFileURL(editorPath).href);
  editorURL.searchParams.set('desktop', 'true');

  mainWindow.loadURL(editorURL.toString());

  mainWindow.on('page-title-updated', (event) => {
    event.preventDefault();
  });

  mainWindow.webContents.on('did-finish-load', () => {
    setTimeout(() => {
      mainWindow.webContents.executeJavaScript(`

      `);
    }, 10);

    setTimeout(() => {
      mainWindow.webContents.executeJavaScript(`
        (function() {
          if (document.querySelector('[data-settings-btn]')) {
            return;
          }
          
          const settingsBtn = document.createElement('button');
          settingsBtn.textContent = '⚙️';
          settingsBtn.setAttribute('data-settings-btn', 'true');
          settingsBtn.style.cssText = \`
            position: fixed !important;
            top: 10px !important;
            right: 4px !important;
            z-index: 999999 !important;
            padding: 8px 8px !important;
            background:rgba(0, 0, 0, 0) !important;
            color: white !important;
            border: none !important;
            border-radius: 4px !important;
            cursor: pointer !important;
            font-family: Arial, sans-serif !important;
            font-size: 14px !important;
            transition: background 0.3s !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          \`;
          settingsBtn.onmouseover = () => settingsBtn.style.background = '#45a04a20';
          settingsBtn.onmouseout = () => settingsBtn.style.background = '#45a04a00';
          settingsBtn.onclick = () => window.electronAPI.openSettings();
          document.body.appendChild(settingsBtn);
        })();
      `);
    }, 25);
    
    // Check for updates after UI is loaded
    setTimeout(() => {
      checkForUpdatesBackground();
    }, 2000);
  });

  mainWindow.on('close', (e) => {
    if (mainWindow.readyToClose) {
      return;
    }
    
    e.preventDefault();
    dialog.showMessageBox(mainWindow, {
      type: 'question',
      buttons: ['Close', 'Cancel'],
      defaultId: 1,
      title: 'Close GaiaMod?',
      message: 'Are you sure you want to close?',
      detail: 'Make sure you saved your work.'
    }).then((response) => {
      if (response.response === 0) {
        mainWindow.readyToClose = true;
        mainWindow.destroy();
      }
    });
  });
}

function createSettingsWindow() {
  if (settingsWindow) {
    settingsWindow.focus();
    return;
  }

  settingsWindow = new BrowserWindow({
    width: 700,
    height: 650,
    parent: mainWindow,
    modal: false,
    frame: false,
    icon: path.join(__dirname, 'assets/icons/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  Menu.setApplicationMenu(null);
  settingsWindow.loadFile('settings.html');

  settingsWindow.on('closed', () => {
    settingsWindow = null;
  });
}

// Check for updates from GitHub
function checkForUpdates() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: '/repos/GaiaMod-Main/GaiaMod-Desktop-New/releases/latest',
      method: 'GET',
      headers: {
        'User-Agent': 'GaiaMod-Desktop-New'
      }
    };

    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const release = JSON.parse(data);
          const tag = typeof release.tag_name === "string" ? release.tag_name : "";
          const latestVersion = tag.startsWith("v") ? tag.slice(1) : tag;
          const isUpToDate = APP_VERSION === latestVersion;
          const isAhead = APP_VERSION.localeCompare(latestVersion, undefined, { numeric: true, sensitivity: 'base' }) > 0;
          
          resolve({
            currentVersion: APP_VERSION,
            latestVersion: latestVersion,
            isUpToDate: isUpToDate,
            isAhead: isAhead,
            downloadUrl: release.html_url,
            releaseName: release.name,
            releaseNotes: release.body || ""
          });
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Background update check
async function checkForUpdatesBackground() {
  try {
    const result = await checkForUpdates();
    
    // Only show update if there's a newer version available (not if ahead)
    if (!result.isUpToDate && !result.isAhead) {
      updateAvailable = true;
      updateSettingsIcon(true);
      createUpdateWindow(result.latestVersion);
    } else {
      updateAvailable = false;
      updateSettingsIcon(false);
    }
  } catch (error) {
    console.error('Background update check failed:', error);
  }
}

// IPC Handlers
ipcMain.on('window-minimize', () => {
  mainWindow.minimize();
});

ipcMain.on('window-maximize', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.on('window-close', () => {
  mainWindow.destroy();
});

ipcMain.on('open-settings', () => {
  createSettingsWindow();
});

ipcMain.handle('check-updates', async () => {
  try {
    const result = await checkForUpdates();
    
    // Update icon based on result
    if (!result.isUpToDate && !result.isAhead) {
      updateAvailable = true;
      updateSettingsIcon(true);
    } else {
      updateAvailable = false;
      updateSettingsIcon(false);
    }
    
    return result;
  } catch (error) {
    return { error: error.message };
  }
});
ipcMain.handle('get-app-version', () => APP_VERSION);

ipcMain.on('open-url', (event, url) => {
  require('electron').shell.openExternal(url);
});

ipcMain.handle('auto-download-update', async (event, version) => {
  try {
    const platformInfo = detectPlatformAndFile(version);
    
    if (platformInfo.isFlatpak) {
      // Open the website for Flatpak users
      shell.openExternal(platformInfo.url);
      return { success: true, isFlatpak: true };
    }
    
    // Download the file
    const downloadsPath = app.getPath('downloads');
    const destPath = path.join(downloadsPath, platformInfo.fileName);
    
    await downloadFile(platformInfo.url, destPath, (percent) => {
      // Send progress to renderer
      if (updateWindow && !updateWindow.isDestroyed()) {
        updateWindow.webContents.send('download-progress', percent);
      }
    });
    
    // Open the file location
    shell.showItemInFolder(destPath);
    
    // On Windows, try to run the installer
    if (process.platform === 'win32') {
      shell.openPath(destPath);
      // Close the app after a short delay
      setTimeout(() => {
        app.quit();
      }, 1000);
    }
    // On Linux, make AppImage executable
    else if (process.platform === 'linux') {
      fs.chmodSync(destPath, '755');
      shell.openPath(destPath);
      // Close the app after a short delay
      setTimeout(() => {
        app.quit();
      }, 1000);
    }
    // On macOS, open the DMG
    else if (process.platform === 'darwin') {
      shell.openPath(destPath);
      // Close the app after a short delay
      setTimeout(() => {
        app.quit();
      }, 1000);
    }
    
    return { success: true, isFlatpak: false, filePath: destPath };
  } catch (error) {
    console.error('Auto download failed:', error);
    return { success: false, error: error.message };
  }
});

// Discord RPC handlers
ipcMain.handle('discord-enable', async () => {
  try {
    const success = await initDiscordRPC();
    return { success, connected: discordConnected };
  } catch (error) {
    console.error('Discord enable error:', error);
    return { success: false, connected: false, error: error.message };
  }
});

ipcMain.handle('discord-disable', () => {
  disconnectDiscordRPC();
  return { success: true, connected: false };
});

ipcMain.handle('discord-status', () => {
  return discordConnected;
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', async (event) => {
  console.log("App is quitting, cleaning up RPC…");

  if (discordClient) {
    event.preventDefault();

    try {
      await discordClient.clearActivity();
    } catch (_) {}

    try {
      await discordClient.destroy();
    } catch (_) {}

    discordClient = null;
    discordConnected = false;

    console.log("RPC cleaned up. Quitting…");
    app.exit(0);
  }
});