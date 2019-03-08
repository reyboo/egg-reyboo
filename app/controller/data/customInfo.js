'use strict';

const Controller = require('egg').Controller;

class CustomInfoController extends Controller {

  async getCustomDataByAll() {
    const { ctx, } = this;
    const info = await ctx.service.customInfo.getCustomDataByAll();
    ctx.body = info;
  }

}

module.exports = CustomInfoController;