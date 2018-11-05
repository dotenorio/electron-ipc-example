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
  setTimeout(() => {
    console.log('GOOD finshed!')
    event.sender.send('ping-good-reply', 'pong')
  }, 5000)
})

ipcMain.on('ping-bad', event => {
  setTimeout(() => {
    console.log('BAD finshed!')
    event.returnValue = 'pong'
  }, 5000)
})
