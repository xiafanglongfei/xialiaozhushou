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
      {
        name: "玻璃0",
        // name_en: "boli",
        params: [
          {
            chicun: 1.28,
            subtotal: 2
          },
          {
            chicun: 1.883,
            subtotal: 5
          }
        ],
      },
      {
        name: "吊线1",
        // name_en: "boli",
        params: [],
      },
      {
        name: "扁管2",
        // name_en: "boli",
        params: [],
      },
      {
        name: "边封3",
        // name_en: "boli",
        params: [],
      },
      {
        name: "上滑4",
        // name_en: "boli",
        params: [],
      },
      {
        name: "钩极5",
        // name_en: "boli",
        params: [],
      },
      {
        name: "上方6",
        // name_en: "boli",
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
    var i = 0

    for (i = 0; i < results.length; i++) {
      var param = new Object()
      if (items[i].hasPF) {
        param.subtotal = items[i].subtotal

        // 扁管
        param.chicun = results[i].bianguan
        console.log("扁管param字段", param)
        array_material[2].params.push(param)
        console.log("扁管params字段", array_material[2].params)
        console.log("array_material字段", array_material)


        // 吊线
        param.chicun = results[i].diaoxian
        param.subtotal = (items[i].PFC - 1) * items[i].subtotal
        array_material[1].params.push(param)
        console.log("array_material字段", array_material)

        // 翻窗玻璃（+3mm）
        param.chicun = results[i].fanchuangboli_gao.toString() + "*" + results[i].fanchuangboli_kuan1.toString()
        param.subtotal = items[i].subtotal * ((items[i].PFC == 2) ? 1 : 2)
        console.log("翻窗玻璃+3param字段", param)
        array_material[0].params.push(param)
        console.log("翻窗玻璃+3params字段", array_material[0].params)
        console.log("array_material字段", array_material)

        // 翻窗玻璃（-2mm）
        param.chicun = results[i].fanchuangboli_gao.toString() + "*" + results[i].fanchuangboli_kuan2.toString()
        param.subtotal = items[i].subtotal * ((items[i].PFC == 4) ? 2 : 1)
        console.log("翻窗玻璃-2mm", param)
        array_material[0].params.push(param)
        console.log("array_material字段", array_material)

        // 扇子玻璃
        param.chicun = results[i].shanziboli_gao.toString() + "*" + results[i].shanziboli_kuan.toString()
        param.subtotal = items[i].subtotal * items[i].WC
        array_material[0].params.push(param)
        console.log("array_material字段", array_material)

      }

      // bianfeng
      param.chicun = results[i].bianfeng
      param.subtotal = 2 * items[i].subtotal
      array_material[3].params.push(param)
      console.log("array_material字段", array_material)

      //shanghua
      param.chicun = results[i].shangxiahua
      param.subtotal = items[i].subtotal
      array_material[4].params.push(param)
      console.log("array_material字段", array_material)

      //gouji
      param.chicun = results[i].gouguangji
      param.subtotal = items[i].WC * items[i].subtotal
      array_material[5].params.push(param)
      console.log("array_material字段", array_material)

      //shangfang
      param.chicun = results[i].shangxiafang
      param.subtotal = items[i].WC * items[i].subtotal
      array_material[6].params.push(param)
      console.log("array_material字段", array_material)


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