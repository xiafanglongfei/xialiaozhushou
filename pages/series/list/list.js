// pages/series/list/list.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    series: null,
    selected: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onPullDownRefresh()
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
    console.info('onPullDownRefresh')
    this.initData()
    this.getList()
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

  initData: function() {
    // this.setData({
    //   series: [
    //     {
    //       name: "默认",
    //       bianguan: 1,
    //       bianfeng: 1,
    //       shangxiahua: 1,
    //       diaoxian: 1,
    //       shangxiafang: 1,
    //       gouguangji: 1
    //     },
    //     {
    //       name: "系列2",
    //       bianguan: 1,
    //       bianfeng: 1,
    //       shangxiahua: 1,
    //       diaoxian: 1,
    //       shangxiafang: 1,
    //       gouguangji: 1
    //     }
    //   ]
    // })
  },

  getList: function() {
    const series = app.globalData.series
    const selected = app.globalData.selected
    this.setData({
      series: series,
      selected: selected
    })
  }
})