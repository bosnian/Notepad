module.exports = {
  
  newNote : function(browser){
    return browser
    .elementByName("New item Button").click()
    .elementByXPath("//android.widget.ListView[1]/android.widget.LinearLayout[1]").click()

  }
}
