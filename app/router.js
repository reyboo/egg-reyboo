'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 云片短信
  router.post('/api/sms/yunpian/sendSms', controller.sms.yunpian.sendSms);
  // order表单操作
  router.get('/api/data/orderInfo/getOrderData/:pageNo/:pageSize', controller.data.orderInfo.getOrderData);
  router.get('/api/data/orderInfo/getOrderDataByPage/:page', controller.data.orderInfo.getOrderDataByPage);
  router.get('/api/data/orderInfo/getOrderCount', controller.data.orderInfo.getOrderCount);
  router.post('/api/data/orderInfo/setOrderData', controller.data.orderInfo.setOrderData);
  router.delete('/api/data/orderInfo/delOrderData/:id', controller.data.orderInfo.delOrderData);
  // logistics表单操作
  router.get('/api/data/logisticsInfo/getLogisticsDataByPage/:page', controller.data.logisticsInfo.getLogisticsDataByPage);
  router.get('/api/data/logisticsInfo/getLogisticsDataByAll', controller.data.logisticsInfo.getLogisticsDataByAll);
  router.post('/api/data/logisticsInfo/setLogisticsData', controller.data.logisticsInfo.setLogisticsData);
  router.delete('/api/data/logisticsInfo/delLogisticsData/:id', controller.data.logisticsInfo.delLogisticsData);
  router.get('/api/data/logisticsInfo/getLogisticCount', controller.data.logisticsInfo.getLogisticCount);
  // custom表单操作
  router.get('/api/data/customInfo/getCustomDataByAll', controller.data.customInfo.getCustomDataByAll);
};
