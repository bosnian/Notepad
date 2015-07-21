module.exports = {

  changeConfirmDropboxSync : function(browser){
    return browser
      .elementById("org.mightyfrog.android.simplenotepad:id/settings_menu")
        .click()
      .elementByXPath("//android.view.View[1]/android.widget.FrameLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.ListView[1]/android.widget.LinearLayout[8]/android.widget.RelativeLayout[1]")
        .click()
      .elementByXPath("//android.view.View[1]/android.widget.FrameLayout[2]/android.widget.LinearLayout[1]/android.widget.ListView[1]/android.widget.LinearLayout[3]")
        .click()
      .back()
      .back()
  }

}
