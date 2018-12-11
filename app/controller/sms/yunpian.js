'use strict';

const Controller = require('egg').Controller;

let key = 'f765d9bf2f34e742cc50b7dd66bdae80';

class YunPianController extends Controller {
    async sendSms() {
    const text = this.ctx.request.body;
    this.ctx.body = key + '云片发短信1' + JSON.stringify(text) + `${JSON.stringify(text.name)}`;
  }
}

module.exports = YunPianController;