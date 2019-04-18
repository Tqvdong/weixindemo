const util = require('../../utils/util.js');
var wxCharts = require('../../utils/wxcharts.js');
var lineChart = null;
var radarChart = null;


Page({
  data: {
    logs: [],
    age: null,
    background: ['../image/view.png', '../image/view.png', '../image/view.png', '../image/view.png', '../image/view.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    tabList: ['卡面', '技能', '评价'],
    current: 0,
    items:
    {
      chName: '示巴', enName: 'SHEBA', height: '162', weight: '55', team: '天', drop: '10%', rank: '80'
    },
    itemAll: [
      { chName: '示巴', enName: 'SHEBA', height: '162', weight: '55', team: '天', drop: '10%', rank: '80', imgURL1: "../image/view.png" },
      { chName: '阿比', enName: 'ABI', height: '162', weight: '55', team: '天', drop: '10%', rank: '80', imgURL1: "../image/view.png" },
      { chName: '所罗门', enName: 'SUOLUOMEN', height: '162', weight: '55', team: '天', drop: '10%', rank: '80', imgURL1: "../image/view.png" },
      { chName: '马修', enName: 'SUOLUOMEN', height: '162', weight: '55', team: '天', drop: '10%', rank: '80', imgURL1: "../image/view.png" },
      { chName: '吉尔', enName: 'SUOLUOMEN', height: '162', weight: '55', team: '天', drop: '10%', rank: '80', imgURL1: "../image/view.png" },
    ],
    test: '',
    style: "width:700rpx;height:500rpx",
    num: 0,
  },

  contentChange: function (e) {
    this.setData({
      current: e.detail.current
    })
  },

  onReady: function () {
    this.animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',

    })
  },

  tabItemClick: function (e) {
    this.setData({
      current: e.currentTarget.dataset.pos
    })
  },

  onLoad: function (options) {

    this.setData({
      age: options.test,
      test: options.test,
      num: options.num,
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

    radarChart = new wxCharts(
      {
        canvasId: 'radarCanvas',
        type: 'radar',
        categories: ['攻击', '防御', '回避', 'HP', 'SP', '技巧'],
        series: [{
          name: '成交量1',
          data: [90, 110, 125, 95, 87, 122]
        }],
        width: 200,
        height: 200,
        extra: {
          radar: {
            max: 150
          }
        }
      }

    );
  },

  rotate: function () {
    console.log("点击了文字");
    console.log(this.data.age);
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.animation.rotate(0).step()
    this.animation.scale(1, 1).step()
    this.setData(
      {
        animation: this.animation.export()
      }
    )
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { }
    })
    /*根据传过来的值决定跳转的页面数据 */
  },

  pause: function () {

    console.log("测试");
    wx.switchTab({
      url: "../index/index",
      success: function () {

        console.log('跳转成功')
      },
      fail: function () {
        console.log('跳转失败')

      }
    })
  },

  changeIndicatorDots: function (e) {
    this.setData(
      {
        indicatorDots: !this.data.indicatorDots
      }
    )
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  changeBig: function () {
    /*展开图片 */
    console.log('改变')
    console.log(this.data.style)
    if (this.data.style == "width:700rpx;height:500rpx") {
      this.setData(
        {
          style: "width:700rpx;height:800rpx"
        }
      )

    }
    else
      if (this.data.style == "width:700rpx;height:800rpx") {
        this.setData(
          {
            style: "width:700rpx;height:500rpx"
          }
        )

      }

  },
  getText:function(){
    console.log('点击')
  }
})