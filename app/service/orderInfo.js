'use strict';

const Service = require('egg').Service;

class OrderInfoService extends Service {
  async getOrderData() {
    const { ctx, config, logger } = this;
    const res = await ctx.curl('http://localhost:3000/api/info_order?_sort=-ORDER_DATE',{
      method: 'GET',
      dataType: 'json'
    })
    return res
  }

  async getOrderDataByPage(page) {
    const { ctx, config, logger } = this;
    const res = await ctx.curl(`http://localhost:3000/api/info_order?_sort=-CREATE_TIME&_p==${page}`,{
      method: 'GET',
      dataType: 'json'
    })
    return res
  }

  async getOrderCount() {
    const { ctx, config, logger } = this;
    const res = await ctx.curl('http://localhost:3000/api/info_order/count',{
      method: 'GET',
      dataType: 'json'
    })
    return res
  }

  async setOrderData(postData) {
    const { ctx, config, logger } = this;
    const res = await ctx.curl('http://localhost:3000/api/info_order',{
      method: 'POST',
      dataType: 'json',
      data: postData
    })
    return res
  }

  async delOrderData(id) {
    const { ctx, config, logger } = this;
    const res = await ctx.curl(`http://localhost:3000/api/info_order/${id}`,{
      method: 'DELETE',
      dataType: 'json'
    })
    return res
  }

}

module.exports = OrderInfoService;