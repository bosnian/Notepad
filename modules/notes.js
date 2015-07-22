module.exports = {

  newNote : function(browser){
    return browser
    .elementById("org.mightyfrog.android.simplenotepad:id/add_new")
      .click()
    .elementById("android:id/title")
      .click()
    .elementById("org.mightyfrog.android.simplenotepad:id/edit_title")
      .sendKeys("New Note")
    .elementById("org.mightyfrog.android.simplenotepad:id/edit_body")
      .sendKeys("This is my new note")
      .hideKeyboard()
    .back()

  },

  setPassword : function(browser){
    return browser
    .elementByXPath("//android.view.View[1]/android.widget.FrameLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.ListView[1]/android.widget.LinearLayout[1]")
      .click()
      .sleep(1000)
    .elementByName("More options")
      .click()
      .sleep(1000)
    .elementByXPath("//android.widget.ListView[1]/android.widget.LinearLayout[9]")
      .click()
      .sleep(1000)
    .elementById("org.mightyfrog.android.simplenotepad:id/password_edit")
      .sendKeys("sifra")
    .elementById("org.mightyfrog.android.simplenotepad:id/password_confirm_edit")
      .sendKeys("sifra")
    .elementById("android:id/button1")
      .click()
      .sleep(1000)
    .back()
    .elementByXPath("//android.view.View[1]/android.widget.FrameLayout[2]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.FrameLayout[1]/android.widget.ListView[1]/android.widget.LinearLayout[1]")
      .click()
      .sleep(1000)
    .elementById("org.mightyfrog.android.simplenotepad:id/password_entry_01")
      .sendKeys("sifra")
    .elementById("android:id/button1")
      .click()
      .sleep(1000)
    .back()


  }
}
