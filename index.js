require('colors')
var wd = require("wd")


var browser = require('./setup').init()

var addNote = require('./modules/add-note')


browser
.then(function(){
  return addNote.newNote(browser)
})
.done()
