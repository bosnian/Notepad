"use strict"

var exec = require('child_process').exec,
    server,client;

var appiumServerString = "appium --command-timeout \"7200\" --debug-log-spacing --automation-name \"Appium\" --platform-name \"Android\" --platform-version \"4.4\" --app \"/Users/ammar1/Downloads/org.mightyfrog.android.simplenotepad-1.8.4-APK4Fun.com.apk\" --no-reset --dont-stop-app-on-reset --app-pkg \"org.mightyfrog.android.simplenotepad\" --device-name \"device\" --device-ready-timeout \"60\" --language \"en\" --session-override"


console.log("Starting appium server...")
server = exec(appiumServerString,
  function (error, stdout, stderr) {
  }
)




setTimeout(function(){
  console.log("Starting scenario...")
  client = exec("node scenario.js",function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + JSON.stringify(error))
    }
    server.kill("SIGTERM")
  })
},5000)
