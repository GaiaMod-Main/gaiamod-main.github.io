@echo off
title Doing upload and building tasks.
echo Building GUI...
set NODE_ENV=production
npm run build
echo Uploading the code...
start upload.bat
TIMEOUT /T 5 /nobreak