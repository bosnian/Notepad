"use strict"
var wd = require("wd")
var chai = require("chai")
var chaiAsPromised = require("chai-as-promised")

module.exports = {
  init : function(){
    chai.use(chaiAsPromised)
    chai.should()
    chaiAsPromised.transferPromiseness = wd.transferPromiseness

    var desired = {
      "appium-version": "1.0",
      platformName: "Android",
      //platformVersion: "4.4",
      deviceName: "device",
      app: "/Users/naida/Downloads/org.mightyfrog.android.simplenotepad-1.8.4-APK4Fun.com.apk",
      "app-package": "org.mightyfrog.android.simplenotepad",
    }


    return wd.promiseChainRemote("0.0.0.0", 4723).init(desired)
  }
}
