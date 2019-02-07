//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,

    results: {
      // fanchuangboli_gao: undefined,
      // fanchuangboli_kuan1: undefined,
      // fanchuangboli_kuan2: undefined,

      // shanziboli_gao: undefined,
      // shanziboli_kuan: undefined,

      // bianfeng: undefined,
      // bianguan: undefined,
      // shangxiahua: undefined,

      // gouguangji: undefined,
      // shangxiafang: undefined,
    },

    options: {
      // raw_height: undefined,
      // raw_width: undefined,
      // shanzi_height: undefined,
      // hasPF: undefined,
      // PFC: undefined,
      // WC: undefined,
    },

    series: [{
        name: "默认",
        shanzi_height: 1.175,
        hasPF: true,
        PFC: 2,
        WC: 2,
        bianguan_h: 1,
        bianfeng_h_d: 1,
        bianfeng_h_x: 1,
        shangxiahua_h: 1,
        diaoxian_h: 1,
        shangxiafang_h: 1,
        gouguangji_h: 1
      },
      {
        name: "系列2",
        shanzi_height: 1.175,
        hasPF: true,
        PFC: 2,
        WC: 2,
        bianguan_h: 1,
        bianfeng_h_d: 1,
        bianfeng_h_x: 1,
        shangxiahua_h: 1,
        diaoxian_h: 1,
        shangxiafang_h: 1,
        gouguangji_h: 1
      }
    ],
    selected: 0,
  }
})