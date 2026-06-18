@echo off
git init
git add .
git commit -m "Uploaded the source code."
git branch -M develop
git remote add origin https://github.com/GaiaMod-Main/gaiamod-main.github.io.git
git push -f --no-verify origin main