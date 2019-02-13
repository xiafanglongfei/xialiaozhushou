// pages/calculator_batchMode/calculator_batchMode.js

const app = getApp()
const cal = require('../../utils/calculate.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],

    // 各参数默认值
    options: {
      shanzi_height: 1.175,
      hasPF: true,
      PFC: 2,
      WC: 2,
    },
  },

  onLoad: function(options) {
    
  },

  formSubmit: function(e) {
    console.log('form 发生 submit 事件，携带值为', e.detail.value)

    var temp = new Object()
    temp.raw_height = parseFloat(e.detail.value.raw_height)
    temp.raw_width = parseFloat(e.detail.value.raw_width)
    temp.hasPF = e.detail.value.hasPF
    temp.PFC = e.detail.value.PFC
    temp.shanzi_height = e.detail.value.shanzi_height
    temp.WC = e.detail.value.WC
    temp.subtotal = e.detail.value.subtotal

    var items = this.data.items
    items.push(temp)

    var s = this.data.s
    s++

    this.setData({
      items: items,
      s: s,
    })

  },

  switchChange: function(e) {
    console.log('switch 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      ["options.hasPF"]: e.detail.value
    })
    app.globalData.options.hasPF = e.detail.value
  },

  radioPFCChange: function(e) {
    console.log('radioPFC 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      ["options.PFC"]: e.detail.value
    })
    app.globalData.options.PFC = e.detail.value
  },

  radioWCChange: function(e) {
    console.log('radioWC 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      ["options.WC"]: e.detail.value
    })
    app.globalData.options.WC = e.detail.value
  },

  radioSubtotalChange: function(e) {
    console.log('radioSubtotal 发生 change 事件，携带值为', e.detail.value)

  },

  oneMore: function() {

  },

  showResult: function(e) {
    app.globalData.items = this.data.items
    // console.log(app.globalData)
    var result = new Array()
    var i = 0

    for (i = 0; i < this.data.items.length; i++) {
      result.push(cal.cal(this.data.items[i]))
    }

    // console.log("result值为", result)

    app.globalData.result = this.data.result

    wx.navigateTo({
      url: '/pages/calculator_batchMode/result/result',
    })
  }
})

// PF: 翻窗(pivot frame)