const { ipcRenderer } = require('electron')

document.getElementById('ping-good').onclick = () => {
  document.getElementById('ping-good-response').innerText = ipcRenderer.sendSync('ping-good', 'ping')
}

document.getElementById('ping-bad').onclick = () => {
  document.getElementById('ping-bad-response').innerText = ipcRenderer.sendSync('ping-bad', 'ping')
}
