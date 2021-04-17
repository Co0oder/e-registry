const { ipcRenderer } = require('electron');
window.onload = () => {
    console.log(document.getElementById('exit'));
    document.getElementById('maximize').addEventListener('click', () => {
        ipcRenderer.send('maximizeApp');
    })
    
    document.getElementById('minimize').addEventListener('click', () => {
        ipcRenderer.send('minimizeApp');
    })
    
    document.getElementById('exit').addEventListener('click', () => {
        ipcRenderer.send('closeApp');
    })
}