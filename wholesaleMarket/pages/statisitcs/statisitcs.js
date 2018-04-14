// pages/statisitcs/statisitcs.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    startDate: '',
    endDate:'',
    menuTabCurrent: '',
    flag1: '',
    flag2: '',
    flag3: ''
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
    this.setData({
      date: this.getTheDate(),
      menuTabCurrent: 0,
      flag1: false,
      // flag2: false,
      // flag3: false
    })
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

  menuTab: function (e) {
    var current = 0;
    current = e.currentTarget.dataset.current; //获取到绑定的数据
    //改变menuTabCurrent的值为当前选中的menu所绑定的数据
    this.setData({
      menuTabCurrent: current,
      flag1: false,
      flag2: false,
      flag3: false
    })
  },

  changeStartDate:function(e){
    this.setData({
      startDate: e.detail.value
    })
  },
  changeEndDate: function (e) {
    this.setData({
      endDate: e.detail.value
    })
  },

  checkFormat: function (month) {
    if(month <= 9) {
      return month = "0" + month;
    }
  return month;
  },
  getTheDate: function () {
    var now = new Date();
    var theYear = now.getFullYear();
    var theMonth = now.getMonth();
    var theDay = now.getDate();
    theMonth = this.checkFormat(theMonth + 1);
    return now = theYear + "-" + theMonth + "-" + theDay;
  },
  search: function(){
    this.setData({
      flag1: true,
      flag2: true,
      flag3: true
    })
  }
  
})