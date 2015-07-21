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
    .back()
    .back()

  }
}
