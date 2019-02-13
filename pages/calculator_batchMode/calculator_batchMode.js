// pages/calculator_batchMode/calculator_batchMode.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    s: 0,

    items: [],

    // 各参数默认值
    options: {},
    
    radioPFCItems: [{
      // name: '2',
      name: '1',
      value: 2,
      checked: true
    },
    {
      // name: '3',
      name: '2',
      value: 3,
    },
    {
      // name: '4',
      name: '3',
      value: 4,
    }
    ],

  },

  onLoad: function (options) {
    var options = new Object()
    // console.log('app.globalData.series[0].hasPF值为', app.globalData.series[0].hasPF)
    options.shanzi_height = app.globalData.series[0].shanzi_height
    options.hasPF = app.globalData.series[0].hasPF
    // console.log('hasPF值为', options.hasPF)
    options.PFC = app.globalData.series[0].PFC
    options.WC = app.globalData.series[0].WC

    this.setData({
      options: options
    })
  },

  formSubmit: function (e) {
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

  switchChange: function (e) {
    console.log('switch 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      ["options.hasPF"]: e.detail.value
    })
    app.globalData.options.hasPF = e.detail.value
  },

  radioPFCChange: function (e) {
    console.log('radioPFC 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      ["options.PFC"]: e.detail.value
    })
    app.globalData.options.PFC = e.detail.value
  },

  radioWCChange: function (e) {
    console.log('radioWC 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      ["options.WC"]: e.detail.value
    })
    app.globalData.options.WC = e.detail.value
  },

  radioSubtotalChange: function (e) {
    console.log('radioSubtotal 发生 change 事件，携带值为', e.detail.value)

  }


})

// PF: 翻窗(pivot frame)