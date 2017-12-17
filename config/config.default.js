'use strict'

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1510478640864_2115'

  // add your config here
  config.middleware = []

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  }

  config.news = {
    pageSize: 5,
    serverUrl: 'https://cnodejs.org/api/v1'
  }

  config.middleware = [
    'robot',
    'apioutput'
  ]

  config.robot = {
    ua: [
      /Baiduspider/i
    ]
  }

  config.apioutput = {
    config: {
      enable: false
    }
  }

  config.mongoose = {
    url: 'mongodb://127.0.0.1/test',
    options: {}
  }

  config.security = {
    csrf: false
  }

  return config
}
