const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  minimizeWindow: () => ipcRenderer.send('window-minimize'),
  maximizeWindow: () => ipcRenderer.send('window-maximize'),
  closeWindow: () => ipcRenderer.send('window-close'),
  openSettings: () => ipcRenderer.send('open-settings'),
  checkUpdates: () => ipcRenderer.invoke('check-updates'),
  openUrl: (url) => ipcRenderer.send('open-url', url),
  enableDiscord: () => ipcRenderer.invoke('discord-enable'),
  disableDiscord: () => ipcRenderer.invoke('discord-disable'),
  getDiscordStatus: () => ipcRenderer.invoke('discord-status'),
  autoDownloadUpdate: (version) => ipcRenderer.invoke('auto-download-update', version),
  onDownloadProgress: (callback) => ipcRenderer.on('download-progress', (event, percent) => callback(percent)),
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
});