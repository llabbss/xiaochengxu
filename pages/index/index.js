//index.js
//获取应用实例
const app = getApp();
var amapFile = require('../../libs/amap-wx');
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  data: {
    curCity: '',
    curLatLng: '',
    location: {},
    items: [
      {
        path: '/',
        title: '美食',
        icon: 'iconfont new-icon-circle icon-canju',
        style: 'background:#fd9d21',
      },
      {
        path: '/pages/film-list/films',
        title: '电影/演出',
        icon: 'iconfont new-icon-circle icon-Artboard',
        style: 'color:#ffffff;background:#f42e1c',
      },
      {
        path: '/',
        title: '酒店住宿',
        icon: 'iconfont new-icon-circle icon-jiudian',
        style: 'background:#a5593e',
      },
      {
        path: '/',
        title: '休闲玩乐',
        icon: 'iconfont new-icon-circle icon-xiuxianyule',
        style: 'background:#42c1a9',
      },
      {
        path: '/',
        title: '外卖',
        icon: 'iconfont new-icon-circle icon-meituanwaimai',
        style: 'background:#f6c400;color:#ffffff;font-size:68rpx;',
      },
      {
        path: '/',
        title: '买菜',
        icon:
          'iconfont new-icon-circle icon-Vegetables--copy-copy-copy-copy-copy',
        style: 'background:#ffffff;color:#22cc00',
      },
      {
        path: '/',
        title: '商超便利',
        icon: 'iconfont new-icon-circle icon-cailanzixuanze',
        style: 'background:#ffffff;color:#f6c224',
      },
      {
        path: '/',
        title: '畅行码',
        icon: 'iconfont new-icon-circle icon-aixin',
        style: 'background:#ffffff;color:#3bcba3;',
      },
      {
        path: '/',
        title: '景点门票',
        icon: 'iconfont new-icon-circle icon-jingdianmenpiao',
        style: 'background:#ffffff;color:#43aafc',
      },
      {
        path: '/',
        title: '打车',
        icon: 'iconfont new-icon-circle icon-che',
        style: 'background:#ffffff;color:#3bcba3;color:#43aafc',
      },
      {
        path: '/',
        title: '跑腿代购',
        icon: 'iconfont new-icon-circle icon-paotui',
        style: 'background:#ffffff;color:#f6c220;',
      },
      {
        path: '/',
        title: '骑车',
        icon: 'iconfont new-icon-circle icon-zihangche',
        style: 'background:#ffffff;color:#3bcba3;color:#43aafc',
      },
      {
        path: '/',
        title: '火车票',
        icon: 'iconfont new-icon-circle icon-huoche-',
        style: 'background:#ffffff;color:#3bcba3;color:#43aafc',
      },
      {
        path: '/',
        title: '蔬菜水果',
        icon: 'iconfont new-icon-circle icon-qingjiao',
        style: 'background:#ffffff;color:#2dce00;',
      },
      //展开
      {
        path: '/',
        title: '展开',
        icon: 'iconfont new-icon-circle icon-xiajiantou1',
        style:
          'font-size:20px;font-weight:bolder;color:#c7c3d3;background:#fff;',
      },
    ],
    nearGroup: [
      {
        img:
          'https://hbimg.huabanimg.com/705e9a748d328d325e73153748e77acda9ed09112c8f9-Yg6s4y_fw658',
        title: '【三件套】超值汉堡单人餐',
        isLike: true,
        icon: '',
        price: '¥29.9',
        discount: '¥88',
      },
      {
        img:
          'https://hbimg.huabanimg.com/705e9a748d328d325e73153748e77acda9ed09112c8f9-Yg6s4y_fw658',
        title: '【三件套】超值汉堡单人餐',
        isLike: true,
        icon: '',
        price: '¥29.9',
        discount: '¥88',
      },
    ],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    imgs: [
      {
        src:
          'https://hbimg.huabanimg.com/d427bd19aa11a548a2371ecd587cdcbcaf9bddff2f9d5-gAsR4T_fw658',
        url: '',
      },
      {
        src:
          'https://hbimg.huabanimg.com/984750909cf43021239a083041aa7fda2bec684edafe-8rUJ5W_fw658',
        url: '',
      },
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
  },

  onLoad: function (options) {
    console.log(options, '++++');
    var that = this;
    qqmapsdk = new QQMapWX({
      key: 'NLZBZ-36DWF-AAYJK-JIHRY-LPVET-72BPU',
    });

    qqmapsdk.reverseGeocoder({
      success: function (data) {
        that.setData(
          {
            curCity: data.result.ad_info.city,
            curLatLng: data.result.location,
          },
          function () {
            that.data.curLatLng = data.result.location;
          }
        );
      },
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      });
    }
  },
  onShow: function (options) {
    console.log(options, '----');
  },
  locationPage() {
    const that = this;
    wx.navigateTo({
      url: '/pages/location/location',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('getCurLocation', { data: that.curCity });
      },
    });
  },
  navigateToPage(e) {
    const that = this;
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('getCurLocation', { data: that.data.curLatLng });
      },
    });
  },
  getUserInfo: function (e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    });
  },
});
