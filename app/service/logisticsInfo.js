'use strict';

const Service = require('egg').Service;

class LogisticsInfoService extends Service {

  async getLogisticsDataByPage(page) {
    const { ctx, config, logger } = this;
    const res = await ctx.curl(`http://localhost:3000/api/info_logistics?_sort=-CREATE_TIME&_p=${page}`, {
      method: 'GET',
      dataType: 'json',
    });
    return res;
  }

  async getLogisticsDataByAll() {
    const { ctx, config, logger } = this;
    const res = await ctx.curl('http://localhost:3000/dynamic/info_logistics', {
      method: 'POST',
      dataType: 'json',
      data: {
        query: 'select * from ??',
        params: [ 'info_logistics' ],
      },
    });
    return res;
  }

  async setLogisticsData(postData) {
    const { ctx, config, logger } = this;
    const res = await ctx.curl('http://localhost:3000/api/info_logistics', {
      method: 'POST',
      dataType: 'json',
      data: postData,
    });
    return res;
  }

  async delLogisticsData(id) {
    const { ctx, config, logger } = this;
    const res = await ctx.curl(`http://localhost:3000/api/info_logistics/${id}`, {
      method: 'DELETE',
      dataType: 'json',
    });
    return res;
  }

  async getLogisticCount() {
    const { ctx, config, logger } = this;
    const res = await ctx.curl('http://localhost:3000/api/info_logistics/count', {
      method: 'GET',
      dataType: 'json',
    });
    return res;
  }

}

module.exports = LogisticsInfoService;
