const { app, BrowserWindow } = require('electron');
const path = require('path'); // 1. Importante importar path

function createWindow(){
  const win = new BrowserWindow({
    fullscreen: true,      
    autoHideMenuBar: true, 
    frame: false,
    icon: path.join(__dirname, 'build/icon.ico') 
  });

  win.loadFile('app.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});