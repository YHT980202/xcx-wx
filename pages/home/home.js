// pages/home/home.js
const App = getApp();
// const utils = require("../../utils/util")
import utils from "../../utils/util"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:0,
    latitude:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  location(){
    // 定位
    wx.getLocation({
      isHighAccuracy:true,

      success:(res)=>{
        console.log(res)
        this.setData(
          {
            longitude:res.longitude,
          latitude:res.latitude
          }
        )
      }
    });
  },
  enterNews(){
    wx.navigateTo({
      url: '/pages/news/news',
      success:(res)=>{
        console.log(res);
        res.eventChannel.emit("aaa",123)
      }
    })
  },
  loading(){
    // wx.showModal({
    //   title: '你好看吗',
    //   content: '真的好看吗',
    //   showCancel:true,
    //   cancelText:"真丑",
    //   cancelColor:"#98C379",
    //   showConfirm:true,
    //   confirmText:"真漂亮",
    //   confirmColor:"#E06C6C",
    //   success(res){
    //     console.log(res);
    //   }
    // })
    wx.showLoading({
      title: '请求中...'
    });
  },
  closeloading(){
    wx.hideLoading();
  },
  toast(){
    wx.showToast({
      title: '请求成功',
      mask:true,
      icon: 'success'
    })
  },
  update(){
    wx.startPullDownRefresh({
      success(res){
        console.log(res)
      }
    })
  },
  onLoad: function (options) {
  //  获取经纬度 定位
   this.location();
   let res = wx.getSystemInfoSync();
   console.log(res);
  wx.setNavigationBarTitle({
    title:"首页"
  })
   
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
    console.log(1111111)
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

  }
})