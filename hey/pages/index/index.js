//index.js
var util = require('../../utils/util.js')

//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '021-64486832',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  openMap: function () {
    console.log('open map');
    wx.openLocation({
      latitude: '31.20779',
      longitude: '121.46923',
      name: 'HEY JUICE茶桔便(田子坊店)',
      address: '上海市黄浦区泰康路220号(田子坊一号门旁边)',
    })
  },
  openImg1: function () {
    wx.previewImage({
      urls: ['http://ormlj27ff.bkt.clouddn.com/img1.jpg'],
    })
  },
   openImg2: function () {
    wx.previewImage({
      urls: ['http://ormlj27ff.bkt.clouddn.com/img2.jpg'],
    })
  },
   openImg3: function () {
    wx.previewImage({
      urls: ['http://ormlj27ff.bkt.clouddn.com/img3.jpg'],
    })
  },
   openImg4: function () {
    wx.previewImage({
      urls: ['http://ormlj27ff.bkt.clouddn.com/img4.jpg'],
    })
  }
})
/**
 * 上海市黄浦区泰康路220号(田子坊一号门旁边)
 * 纬度：31.20779
 * 经度：121.46923
 * HEY JUICE茶桔便(田子坊店)
 */