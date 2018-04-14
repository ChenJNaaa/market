// pages/orderdetails/orderdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordersInfos:[
      {
        idCode: 12346578,
        date: "2018-04-22",
        seller: "供应商1",
        commoditys: [
          {
          "name": "商品1",
          "specification": "黑色/M",
          "quantity": 1231,
          "price": 15
          },
          {
            "name": "商品2",
            "specification": "黑色/M",
            "quantity": 1231,
            "price": 15
          },
          {
            "name": "商品3",
            "specification": "黑色/M",
            "quantity": 1231,
            "price": 15
          }, {
            "name": "商品4",
            "specification": "黑色/M",
            "quantity": 1231,
            "price": 15
          }
        ],
        status: 0
      },
      {
        idCode: 12346578,
        date: "2018-04-22",
        seller: "供应商2",
        commoditys: [
          {
            "name": "商品1",
            "specification": "黑色/M",
            "quantity": 1231,
            "price": 15
          },
          {
            "name": "商品2",
            "specification": "黑色/M",
            "quantity": 1231,
            "price": 15
          },
          {
            "name": "商品3",
            "specification": "黑色/M",
            "quantity": 1231,
            "price": 13
          }, {
            "name": "商品4",
            "specification": "黑色/M",
            "quantity": 1231,
            "price": 17
          }
        ],
        status: 0
      },
      {
        idCode: 123434578,
        date: "2018-04-12",
        seller: "供应商3",
        commoditys: [
          {
          "name": "商品1",
          "specification": "黑色/L",
          "quantity": 1231,
          "price": 15
          },
          {
            "name": "商品2",
            "specification": "黑色/S",
            "quantity": 1231,
            "price": 15
          },
          {
            "name": "商品3",
            "specification": "黄色/M",
            "quantity": 1231,
            "price": 15
          }, {
            "name": "商品4",
            "specification": "白色/M",
            "quantity": 1231,
            "price": 15
          }
        ],
        status: 0
      }
    ],
    array: new Array()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1);
    console.log(this.getTotalPrice());
    
    console.log(2);
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
  getTotalPrice:function(){
    var jso = JSON.stringify(this.ordersInfos);
    var sum = 0;
    for (var x in jso) {
      console.log(jso[x].name);
      for (var i in jso[x].commoditys) {
        console.log(jso[x].commoditys[i].price);
        sum = sum + jso[x].commoditys[i].price;
      }
    }
    return sum;
  },


  getAllPrice: function (){
    var jsonObj = [{ name: "ddd", dd: [{ a: "c4564", b: 34 }, { a: "c7", b: 45 }] }, { name: "ddd", dd: [{ a: "c6767", b: 3 }, { a: "ghrgfc", b: 6 }] }];
    var sum = 0;
    for (var x in jsonObj) {
      console.log(jsonObj[x].name);
      for (var i in jsonObj[x].dd) {
        console.log(jsonObj[x].dd[i].a);
        sum = sum + jsonObj[x].dd[i].b;
      }
    }
    return sum;
  }

})