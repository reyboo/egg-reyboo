'use strict';

const Controller = require('egg').Controller;

class OrderInfoController extends Controller {
  async getOrderData() {
    const { ctx } = this;
    const pageNo = ctx.params.pageNo;
    const pageSize = ctx.params.pageSize;
    const info = await ctx.service.orderInfo.getOrderData(pageNo, pageSize);
    ctx.body = info;
  }

  async getOrderDataByPage() {
    const { ctx } = this;
    const page = ctx.params.page;
    const info = await ctx.service.orderInfo.getOrderDataByPage(page);
    ctx.body = info;
  }

  async getOrderCount() {
    const { ctx } = this;
    const info = await ctx.service.orderInfo.getOrderCount();
    ctx.body = info;
  }

  async setOrderData() {
    const { ctx } = this;
    const postData = ctx.request.body;
    const info = await ctx.service.orderInfo.setOrderData(postData);
    ctx.body = info;
  }

  async delOrderData() {
    const { ctx } = this;
    const id = ctx.params.id;
    const info = await ctx.service.orderInfo.delOrderData(id);
    ctx.body = info;
  }
}

module.exports = OrderInfoController;
