'use strict';

const Service = require('egg').Service;

class YunpianService extends Service {
  async sendSms(postData) {
    const { ctx, config, logger } = this;
    const key = config.yunpian.key;
    const url = config.yunpian.url.singleSend;
    const text = '【六角电工】感谢您的支持！您的订单货已在' + postData.logistics + '发出，物流运单号为' + postData.order + '，物流电话：' + postData.logistics_phone + ' 如有疑问请拨打：027-85867455 详询。谢谢！';
    const params = {
      apikey: key,
      mobile: postData.sendPhone,
      text,
    };
    const res = await ctx.curl(url, {
      method: 'POST',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      data: params,
    });
    return {
      data: res.data,
      status: res.status,
    };
  }
}

module.exports = YunpianService;
