// pages/home/home.js
const App = getApp();
// const utils = require("../../utils/util")
import utils from "../../utils/util"
Page({

  /**
   * 页面的初始数据
   */
  data: {
   title:"hello 小程序"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     //接受 页面间的传参、发送ajax
      console.log(utils.formatTime(new Date()));

    //  console.log("页面加载时触发--onload");
    //  console.log(this.data.title);
    //  this.setData({
    //    title:"师傅爱喝的茶叫做乌龙"
    //  });
  },
  change1(){
    this.setData({
      title:"数据又改了"
    })
  },
  change2(){
    console.log("asd");
  },
  change3(opt){
    console.log(opt.detail);
    this.setData({
      title:opt.detail
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      console.log("页面初次渲染完成--ready");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
       console.log("页面显示");
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
    console.log("下拉刷新")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉刷新")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})