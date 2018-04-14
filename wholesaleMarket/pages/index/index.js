//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),


    supplierList:[
      {
        "name":"供应商1供应商1供应商1供应商1供应商1供应商1供应商1供应商1",
        "address":"地址1"
      },
      {
        "name": "供应商2",
        "address": "地址2"
      },
      {
        "name": "供应商3",
        "address": "地址3"
      },
      {
        "name": "供应商4",
        "address": "地址4"
      }
    ],
    purOrders:[
      {
        "idCode":"0123154",
        "date":"2018-04-12",
        "seller":"供应商A",
        "status":"0"
      },
      {
        "idCode": "0123134",
        "date": "2018-04-13",
        "seller": "供应商A",
        "status": "1"
      },
      {
        "idCode": "0123254",
        "date": "2018-04-14",
        "seller": "供应商A",
        "status": "0"
      }
    ]


  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  menuTab: function (e) {
    var current = 0;
    current = e.currentTarget.dataset.current; //获取到绑定的数据
    //改变menuTabCurrent的值为当前选中的menu所绑定的数据
    this.setData({
      menuTabCurrent: current
    })
  }
})
