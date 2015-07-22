require('colors')
var wd = require("wd")

var config = require('./config')



var browser = config.init()

var notes = require('./modules/notes')
var settings = require('./modules/settings')


browser
.then(function(){
  return notes.newNote(browser)
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
