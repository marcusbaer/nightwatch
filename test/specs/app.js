'use strict'
module.exports = {
  'nightwatch app test': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('#input', 1000)
      .expect.element('#input').text.to.equal('')
    browser
      .pause(1000)
      // replace text input "nightwatch" by "foodwatch"
      .setValue('#input', 'nightwatch')
      .expect.element('#result').text.to.equal('foodwatch')
    browser
      .pause(1000)
      .clearValue('#input')
      // text input "test" is without replacement
      .setValue('#input', 'test')
      .expect.element('#result').text.to.equal('test')
    browser
      .pause(1000)
      .end()
  }
}
