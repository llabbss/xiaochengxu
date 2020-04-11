// pages/film-list/films.js
// key:276594079e3dfff4b2d2b4d9349c64b3
// http://v.juhe.cn/movie/cinemas.local?key=您申请的key&dtype=json&lat=31.30947&lon=120.6003&radius=2000
Page({
  /**
   * 页面的初始数据
   */
  data: {
    curLoc: '',
    locFilmsList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;

    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('getCurLocation', function (data) {
      that.setData(
        {
          curLoc: data.data,
        },
        function () {
          console.log(that.data.curLoc, '====loc');
        }
      );
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const that = this;
    return;
    wx.request({
      url:
        'http://v.juhe.cn/movie/cinemas.local?key=276594079e3dfff4b2d2b4d9349c64b3&dtype=json&lat=31.30947&lon=120.6003&radius=2000',
      data: {
        key: 'b79193d1994dbdfa6cdf1dcb305c9bc7',
        type: 'json',
        lat: 22.52157, //that.data.curLoc.lat,
        lon: 114.0576, //that.data.curLoc.lng,
        radius: '20000',
      },
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          that.setData({
            locFilmsList: res.data.result,
          });
        }
        console.log(res, '++++');
      },
      fail: (res) => {},
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
