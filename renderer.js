// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
//该文件是index.html文件所必需的，并且将

//在该窗口的渲染进程中执行。

//所有node.js API在此过程中都可用。
// let myNotification = new Notification('标题', {
//   body: '通知正文内容'
// })
// myNotification.onclick = () => {
//   console.log('通知被点击')
// }


// 在渲染进程中使用主进程模块
// 例如：const{BrowserWindow}=require('electron').remote
// let win = new BrowserWindow({width:800, height:600})
// win.loadURL('https://github.com')
const { app } = require('electron').remote
console.log(app.getVersion())
const { remote } = require('electron')
console.log(remote.getGlobal("globalData").test)


const { ipcRenderer } = require('electron')
var closeEl = document.querySelector('.close');
closeEl.addEventListener('click', function () {
  ipcRenderer.send('close-main-window');
});


onload = () => {
  const webview = document.querySelector('webview')
  const indicator = document.querySelector('.indicator')

  const loadstart = () => {
    indicator.innerText = 'loading...'
  }

  const loadstop = () => {
    indicator.innerText = ''
  }

  webview.addEventListener('did-start-loading', loadstart)
  webview.addEventListener('did-stop-loading', loadstop)
}