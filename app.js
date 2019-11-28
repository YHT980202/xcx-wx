//app.js
App({
  onLaunch: function () {
  
  },
  _post(obj){
    
    return new Promise((resolve,reject)=>{
      // 取缓存
      wx.showLoading({
        title:'请求中...' ,
        mask: true
      });
      wx.request({
        method:"POST",
        url: obj.url,
        data:obj.data,
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
          //放token
        },
        success: function(res) {
          /*
          code: 401  token过期
          */ 
         if(res.code === 401){
           wx.showToast({
             title: '登录信息',
             icon: '身份信息过期，请重新登录',
             complete(){
              //  跳到登录页
             }
           })
          //  调到登录页面
         }else if(res.code===0){
           resolve(res);
         }
          wx.hideLoading();
          
        },
        fail:(err)=>{
          reject(err);
        }
      })
    });
  },
  globalData: {
    userInfo: null,
    wx:12345
  }
})