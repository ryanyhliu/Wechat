//index.js
//获取应用实例
const app = getApp()

Page({
    data:{
      inputValue: null,
      returnedInfo: null,
  },

  bindKeyInput: function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },

  buttonOnClick: function(){
    var tempInfo = this
    // console.log(this.data.inputValue)
    app.getPhoneInfo(this.data.inputValue, function(data){
      console.log(data)
      tempInfo.setData({
        returnedInfo: data.result.province + data.result.city
      })
    });
  },
})
