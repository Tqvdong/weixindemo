//index.js
//获取应用实例
const app = getApp()
var flag = true;

Page({
  data: {
    motto: '列表',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    color: "window",
    newList: [{num:0, url: "baidu.com", title: "测试1", classification: "新闻", time: "2018-10-17", imgURL: "../image/view.png" },
    {num:1, url: "baidu.com", title: "测试2", classification: "新闻", time: "2018-10-17", imgURL: "../image/view.png" },
    {num:2, url: "baidu.com", title: "测试3", classification: "新闻", time: "2018-10-17", imgURL: "../image/view.png" },
    {num:3, url: "baidu.com", title: "测试4", classification: "更新", time: "2018-10-17", imgURL: "../image/view.png" },
    {num:4, url: "baidu.com", title: "测试5", classification: "新闻", time: "2018-10-17", imgURL: "../image/view.png" },
    {num:5, url: "baidu.com", title: "测试6", classification: "评测", time: "2018-10-17", imgURL: "../image/view.png" },
    {num:6, url: "baidu.com", title: "测试7", classification: "评测", time: "2018-10-17", imgURL: "../image/view.png" },
    {num:7, url: "baidu.com", title: "测试8", classification: "新闻", time: "2018-10-17", imgURL: "../image/view.png" },
    {num:8, url: "baidu.com", title: "测试9", classification: "新闻", time: "2018-10-17", imgURL: "../image/view.png" },
    {num:9, url: "baidu.com", title: "测试10", classification: "评测", time: "2018-10-17", imgURL: "../image/view.png" }
    ],
    navs: [
      { navimg: "../image/view.png", navtext: '掌上信息' },
      { navimg: "../image/view.png", navtext: '商家' },
      { navimg: "../image/view.png", navtext: '抢购' },
      { navimg: "../image/view.png", navtext: '抢福利' },
      { navimg: "../image/view.png", navtext: '五折卡' },
      { navimg: "../image/view.png", navtext: '黑猫活动' },
      { navimg: "../image/view.png", navtext: '本地圈' },
      { navimg: "../image/view.png", navtext: '顺风车' },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs?type=2'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  jump: function () {
    {

      console.log("测试");

      wx.navigateTo({
        url: "../message/message",
        success: function () {

          console.log('跳转成功')
        },
        fail: function () {
          console.log('跳转失败')

        }
      })
    }
  },
  jumpToMenu1:function(){
    console.log("主页1");
  },
  jumpToMenu2:function(){
    console.log("主页2");
  }
  ,
  jumpToIntro:function(){
    console.log("跳转到子介绍页");
  }
})
