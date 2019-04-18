const util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    date: '2016-09-01'
  },
  onLoad: function (options) {
    console.log(options.type)
  },
  jump: function () {
    {
      console.log("测试");
    }
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  }
})