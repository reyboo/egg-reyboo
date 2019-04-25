'use strict';

const Service = require('egg').Service;

class OrderInfoService extends Service {
  async getOrderData(pageNo, pageSize) {
    const { ctx, config, logger } = this;
    const count = await ctx.curl('http://localhost:3000/api/info_order/count', {
      method: 'GET',
      dataType: 'json',
    });
    const res = await ctx.curl(`http://localhost:3000/api/info_order?_sort=-ORDER_DATE,-CREATE_TIME&_p=${pageNo}&_size=${pageSize}`, {
      method: 'GET',
      dataType: 'json',
    });
    const _pageNo = +pageNo;
    const _pageSize = +pageSize;
    const _rows = count.data[0].no_of_rows;
    const _totalPage = Math.ceil(_rows / _pageSize);
    return {
      data: res.data,
      status: res.res.status,
      pageNo: _pageNo,
      pageSize: _pageSize,
      totalCount: _rows,
      totalPage: _totalPage,
    };
  }

  async getOrderDataByPage(page) {
    const { ctx, config, logger } = this;
    const res = await ctx.curl(`http://localhost:3000/api/info_order?_sort=--ORDER_DATE,-CREATE_TIME&_p=${page}`, {
      method: 'GET',
      dataType: 'json',
    });
    return res;
  }

  async getOrderCount() {
    const { ctx, config, logger } = this;
    const res = await ctx.curl('http://localhost:3000/api/info_order/count', {
      method: 'GET',
      dataType: 'json',
    });
    return res;
  }

  async setOrderData(postData) {
    const { ctx, config, logger } = this;
    const res = await ctx.curl('http://localhost:3000/api/info_order', {
      method: 'POST',
      dataType: 'json',
      data: postData,
    });
    return res;
  }

  async delOrderData(id) {
    const { ctx, config, logger } = this;
    const res = await ctx.curl(`http://localhost:3000/api/info_order/${id}`, {
      method: 'DELETE',
      dataType: 'json',
    });
    return res;
  }

}

module.exports = OrderInfoService;
