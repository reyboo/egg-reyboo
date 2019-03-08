'use strict';

const Controller = require('egg').Controller;

class LogisticsInfoController extends Controller {

  async getLogisticsDataByPage() {
    const { ctx, } = this;
    const page = ctx.params.page
    const info = await ctx.service.logisticsInfo.getLogisticsDataByPage(page);
    ctx.body = info;
  }

  async getLogisticsDataByAll() {
    const { ctx, } = this;
    const info = await ctx.service.logisticsInfo.getLogisticsDataByAll();
    ctx.body = info;
  }
  
  async setLogisticsData() {
    const { ctx, } = this;
    const postData = ctx.request.body;
    const info = await ctx.service.logisticsInfo.setLogisticsData(postData);
    ctx.body = info;
  }
  
  async delLogisticsData() {
    const { ctx, } = this;
    const id = ctx.params.id;
    const info = await ctx.service.logisticsInfo.delLogisticsData(id);
    ctx.body = info;
  }
  
  async getLogisticCount() {
    const { ctx, } = this;
    const info = await ctx.service.logisticsInfo.getLogisticCount();
    ctx.body = info;
  }

}

module.exports = LogisticsInfoController;