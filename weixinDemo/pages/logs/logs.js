//logs.js
const util = require('../../utils/util.js');
var wxCharts = require('../../utils/wxcharts.js');
var lineChart = null;
var radarChart = null;
Page({
  data: {
    logs: [],
    background: ['../image/view.png', '../image/view.png', '../image/view.png', '../image/view.png', '../image/view.png', '../image/view.png', '../image/view.png'],
    date: '2016-09-01',
    
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  createSimulationData: function () {
    var categories = [];
    var data = [];
    for (var i = 0; i < 10; i++) {
      categories.push('2016-' + (i + 1));
      data.push(Math.random() * (20 - 10) + 10);
    }
    // data[4] = null;
    return {
      categories: categories,
      data: data
    }
  },
  onLoad: function (options) {
    console.log(options.type)
    this.setData({

      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    var simulationData = this.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '成交量1',
        data: simulationData.data,
        format: function (val, name) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量2',
        data: [2, 0, 0, 3, null, 4, 0, 0, 2, 0],
        format: function (val, name) {
          return val.toFixed(2) + '万';
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '成交金额 (万元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: 200,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
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
  jumpToIntro: function () {
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
  saveDate: function () {
    console.log("save")
    if (this.data.date) {
      wx.setStorage({
        key: 'addDate',
        data: this.data.date,
      })
    }
  },
  loadDate:function(){
     console.log("load")
     var that = this;
     var date2 = '';
     wx.getStorage({
       key: 'addDate',
       success: function(res) {
           console.log(res.data)
           that.setData({
              date2:res.data             
           }
           )

       },
       
     })
    console.log(date2)
  }
},


)









