var fs = require('fs')
var readline = require('readline')

var apkName = "org.mightyfrog.android.simplenotepad-1.8.4-APK4Fun.com.apk"
var sourcePre = "var wd = require('wd') \n var chai = require('chai') \n var chaiAsPromised = require('chai-as-promised') \n module.exports = {init : function(){ chai.use(chaiAsPromised) \n chai.should() \n chaiAsPromised.transferPromiseness = wd.transferPromiseness \n var desired = { 'appium-version': '1.4.8', platformName: 'Android', deviceName: 'device', app: '"
var sourcePost = "','app-package': 'org.mightyfrog.android.simplenotepad'} \n return wd.promiseChainRemote('0.0.0.0', 4723).init(desired) }}"


if(fs.existsSync('./config.js')){
  console.log("Setup is configured!")
  process.exit()
}

if(fs.existsSync('./bin/'+apkName)){
  fs.writeFileSync("config.js", sourcePre+__dirname+"/bin/"+apkName+sourcePost)
  console.log("File found!")
  process.exit()
}

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var location;
rl.question("Enter location of "+apkName+": ", function(answer) {
  if(answer.slice(-1) == '/')
    answer = answer.slice(0,-1)
  if(fs.existsSync(answer+"/"+apkName)){
    console.log("File found!")
    location = answer+"/"+apkName
    fs.writeFileSync("config.js", sourcePre+location+sourcePost)
    console.log("Setup finished!")
  }else{
    console.log("File not found. Run setup again!")
    process.exit()
  }
  rl.close()
})
