'use strict';

const Service = require('egg').Service;

class CustomInfoService extends Service {

  async getCustomDataByAll() {
    const { ctx, config, logger } = this;
    const res = await ctx.curl('http://localhost:3000/dynamic/info_custom', {
      method: 'POST',
      dataType: 'json',
      data: {
        query: 'select * from ??',
        params: [ 'info_custom' ],
      },
    });
    return res;
  }

}

module.exports = CustomInfoService;
