Page({
  data: {},
  onLoad() {},
  configurarSessionId: function(e){
  const sessionID= e.detail.value.sessionID;
  getApp().globalData.sessionId=sessionID;
  
  }
});
