set NODE_OPTIONS=--max_old_space_size=4096
npm cache clean --force
Remove-Item -Recurse -Force node_modules
del package-lock.json
npm install
npm start -- --reset-cache
PAUSE