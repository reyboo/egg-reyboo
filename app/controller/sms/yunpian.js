'use strict';

const Controller = require('egg').Controller;

let key = 'f765d9bf2f34e742cc50b7dd66bdae80';

class YunPianController extends Controller {
    async sendSms() {

    const { ctx, config, logger } = this;
    // 获取前端参数
    const postData = ctx.request.body;
    // 调用service中yunpian.sendSms方法
    const info = await ctx.service.yunpian.sendSms(postData);

    ctx.body = info;
  }
}

module.exports = YunPianController;