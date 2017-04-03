nightwatch_config = {

  "output_folder": false,
  "src_folders": ["specs"],

  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  test_settings: {
    default: {
      "screenshots": {
        "enabled": true,
        "on_failure": true,
        "path": "screenshots"
      },
      "videos": {
        "enabled": true,
        "delete_on_success": true,
        "path": "videos"
      },
      "launch_url": "http://app",
      "selenium_host": "chromedriver",
      desiredCapabilities: {
        'browserstack.user': process.env.BS_USER,
        'browserstack.key': process.env.BS_KEY,
        //'browserstack.local': true,
        'browser': 'chrome'
      }
    }
  }
};

// Code to copy seleniumhost/port into test settings
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
  config['output_folder'] = nightwatch_config.output_folder;
  config['src_folders'] = nightwatch_config.src_folders;
}

module.exports = nightwatch_config;
