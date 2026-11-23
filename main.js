// BOB 2 – Desktop-Fenster und automatische Updates
const { app, BrowserWindow, dialog, globalShortcut } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 940,
    minWidth: 640,
    minHeight: 480,
    backgroundColor: '#0b1a2a',
    title: `BOB 2 – Version ${app.getVersion()}`,
    icon: path.join(__dirname, 'build', 'icon.png'),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false },
  });
  win.setMenu(null);
  win.maximize();
  win.loadFile(path.join(__dirname, 'game', 'index.html'));
  win.on('page-title-updated', e => e.preventDefault());

  // F11: Vollbild an/aus
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
      e.preventDefault();
    }
  });
}

function setupUpdates() {
  if (!app.isPackaged) return; // nur in der installierten Version
  autoUpdater.autoDownload = true;
  autoUpdater.on('update-downloaded', info => {
    dialog.showMessageBox(win, {
      type: 'info',
      title: 'Update für BOB 2',
      message: `Version ${info.version} ist da!`,
      detail: 'Jetzt neu starten und das Update installieren?',
      buttons: ['Jetzt neu starten', 'Später'],
      defaultId: 0,
      cancelId: 1,
    }).then(r => { if (r.response === 0) autoUpdater.quitAndInstall(); });
  });
  autoUpdater.on('error', () => {}); // ohne Internet einfach weiterspielen
  autoUpdater.checkForUpdates().catch(() => {});
  // während des Spielens jede Stunde nachsehen
  setInterval(() => autoUpdater.checkForUpdates().catch(() => {}), 60 * 60 * 1000);
}

app.whenReady().then(() => {
  createWindow();
  setupUpdates();
});

app.on('window-all-closed', () => app.quit());
