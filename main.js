const { app, BrowserWindow, ipcMain } = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 395})
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('ping-good', event => {
  event.returnValue = 'pong'
  setTimeout(() => {
    console.log('GOOD finshed!')
  }, 5000)
})

ipcMain.on('ping-bad', event => {
  setTimeout(() => {
    console.log('BAD finshed!')
    event.returnValue = 'pong'
  }, 5000)
})
