'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '127.0.0.1',
    },
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543857122363_7470';

  // add your config here
  config.middleware = [];

  // 云片短信apikey
  config.yunpian = {
    key: 'f765d9bf2f34e742cc50b7dd66bdae80',
    url: {
      singleSend: 'https://sms.yunpian.com/v2/sms/single_send.json',
      tplSingleSend: 'https://sms.yunpian.com/v2/sms/tpl_single_send.json',
    },
  };

  return config;
};
// 跨域配置
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
