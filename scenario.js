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
  .then(null,function(err){
    console.log("Greska u dodavanju novog zapisa!\n"+err)
  })
.then(function(){
  return settings.changeConfirmDropboxSync(browser)
})
.then(null,function(err){
  console.log("Greska u promjeni DROPBOX postavki!\n"+err)
})
.then(function(){
  return notes.setPassword(browser)
})
.then(null,function(err){
  console.log("Greska u postavljanju sifre!\n"+err)
})
.fin(function(){
  return browser
    .sleep(2000)
    .quit()
})
.done()
