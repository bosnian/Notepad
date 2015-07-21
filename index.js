require('colors')
var wd = require("wd")


var browser = require('./config').init()

var addNote = require('./modules/add-note')
var settings = require('./modules/settings')


browser
.then(function(){
  return settings.changeConfirmDropboxSync(browser)
})
.fin(function(){
  return browser
    .sleep(2000)
    .quit()
})
.done()
