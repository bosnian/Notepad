require('colors')
var wd = require("wd")

var config = require('./config')



var browser = config.init()

var addNote = require('./modules/add-note')
var settings = require('./modules/settings')


browser
.then(function(){
  return addNote.newNote(browser)
})
.then(function(){
  return settings.changeConfirmDropboxSync(browser)
})
.fin(function(){
  return browser
    .sleep(2000)
    .quit()
})
.done()
