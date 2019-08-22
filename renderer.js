// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
//该文件是index.html文件所必需的，并且将

//在该窗口的渲染进程中执行。

//所有node.js API在此过程中都可用。
let myNotification = new Notification('标题', {
  body: '通知正文内容'
})
myNotification.onclick = () => {
  console.log('通知被点击')
}


const { app } = require('electron').remote
console.log(app.getVersion())