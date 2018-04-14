// pages/index/demand/demand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    products:[
      {
        'name':'产品1',
        'specif':'白色/L',
        'price':123,
        'number':123
      },
      {
        'name': '产品2',
        'specif': '白色/L',
        'price': 124,
        'number': 124
      },
      {
        'name': '产品3',
        'specif': '白色/L',
        'price': 13,
        'number': 163
      },
      {
        'name': '产品4',
        'specif': '白色/L',
        'price': 1265,
        'number': 1265
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  deleteSupplier:function(e){

  },
  selectProduct:function(e){
    // console.log("hello")
    this.setData({
      flag:false
    })
  }
})