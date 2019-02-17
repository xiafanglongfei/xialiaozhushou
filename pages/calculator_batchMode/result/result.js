// pages/calculator_batchMode/result/result.js

const app = getApp()
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    results: [],

    array_material: [
      // 0
      {
        name: "玻璃（高*宽*块数）",
        // name_en: "boli",
        params: [
          // {
          //   chicun: 1.28,
          //   subtotal: 2
          // },
          // {
          //   chicun: 1.883,
          //   subtotal: 5
          // }
        ],
      },
      // 1
      {
        name: "吊线（长度*根数）",
        params: [],
      },
      // 2
      {
        name: "扁管（长度*根数）",
        params: [],
      },
      // 3
      {
        name: "边封（长度*根数）",
        params: [],
      },
      // 4
      {
        name: "上下滑（长度*套数）",
        params: [],
      },
      // 5
      {
        name: "钩光极（长度*套数）",
        params: [],
      },
      // 6
      {
        name: "上下方（长度*根数）",
        params: [],
      },

      // {
      //   name: "下滑",
      //   // name_en: "boli",
      //   params: [],
      // },
      // {
      //   name: "光极",
      //   // name_en: "boli",
      //   params: [],
      // },
      // {
      //   name: "下方",
      //   // name_en: "boli",
      //   params: [],
      // },

    ],


    tabs: ["按材料种类分", "按窗户分", "其他"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 这部分用于navbar的参数引入
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    })

    // 引入批量模式的计算结果
    this.setData({
      items: app.globalData.items,
      results: app.globalData.results
    })

    var items = this.data.items
    var results = this.data.results
    var array_material = this.data.array_material
    // var array_material = new Array()

    var i = 0

    for (i = 0; i < results.length; i++) {
      if (items[i].hasPF) {
        
        // 翻窗玻璃（+3mm）
        var param0 = new Object()
        param0.chicun = results[i].fanchuangboli_gao.toString() + "*" + results[i].fanchuangboli_kuan1.toString()
        param0.subtotal = items[i].subtotal * ((items[i].PFC == 2) ? 1 : 2)
        array_material[0].params.push(param0)

        // 翻窗玻璃（-2mm）
        var param0 = new Object()
        param0.chicun = results[i].fanchuangboli_gao.toString() + "*" + results[i].fanchuangboli_kuan2.toString()
        param0.subtotal = items[i].subtotal * ((items[i].PFC == 4) ? 2 : 1)
        array_material[0].params.push(param0)

        // 扇子玻璃
        var param0 = new Object()
        param0.chicun = results[i].shanziboli_gao.toString() + "*" + results[i].shanziboli_kuan.toString()
        param0.subtotal = items[i].subtotal * items[i].WC
        array_material[0].params.push(param0)

        // 吊线
        var param1 = new Object()
        param1.chicun = results[i].diaoxian
        param1.subtotal = (items[i].PFC - 1) * items[i].subtotal
        array_material[1].params.push(param1)

        // 扁管
        var param2 = new Object()
        param2.chicun = results[i].bianguan
        param2.subtotal = items[i].subtotal
        array_material[2].params.push(param2)
      }

      // bianfeng
      var param3 = new Object()
      param3.chicun = results[i].bianfeng
      param3.subtotal = 2 * items[i].subtotal
      array_material[3].params.push(param3)

      //shanghua
      var param4 = new Object()
      param4.chicun = results[i].shangxiahua
      param4.subtotal = items[i].subtotal
      array_material[4].params.push(param4)

      //gouji
      var param5 = new Object()
      param5.chicun = results[i].gouguangji
      param5.subtotal = items[i].WC * items[i].subtotal
      array_material[5].params.push(param5)

      //shangfang
      var param6 = new Object()
      param6.chicun = results[i].shangxiafang
      param6.subtotal = items[i].WC * items[i].subtotal
      array_material[6].params.push(param6)
    }

    this.setData({
      array_material: array_material,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})