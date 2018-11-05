const { ipcRenderer } = require('electron')

document.getElementById('ping-good').onclick = () => {
  ipcRenderer.send('ping-good', 'ping')
  document.getElementById('ping-good-response').innerText = 'Waiting..'
}

ipcRenderer.on('ping-good-reply', (event, response) => {
  document.getElementById('ping-good-response').innerText = response
})

document.getElementById('ping-bad').onclick = () => {
  document.getElementById('ping-bad-response').innerText = ipcRenderer.sendSync('ping-bad', 'ping')
}
