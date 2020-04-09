//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    items: [
      {
        path: '/',
        title: '美食',
        icon: 'iconfont new-icon-circle icon-canju',
        style: 'background:#fd9d21',
      },
      {
        path: '/',
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

  onLoad: function () {
    this.getShopList();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: (res) => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          });
        },
      });
    }
  },
  getShopList() {
    return wx.request({
      url:
        'https://i.waimai.meituan.com/openh5/channel/kingkongshoplist?_=1586401640125&X-FOR-WITH=qCm%2BaDyhpmwYiVvsD2Lr7EqiB8%2Bls1vJ1Efdk25PkSUwMKxmcA68H9tFp0yrliM6GXYpwFnSm9QopfM1VLtGTQ56VEwQ7djQMZ59xNpagIkRZmLVV1qRacxeftVx4%2B7vK2uVmXf0wjc3CxcZg%2FgnPOPzYjh95EK5kulK53dbBUWflwDwgRW1QnSI6nNaQZo0FWI3BIdpJNq%2FAdzsWA9LSQ%3D%3D',
      data: {
        startIndex: 0,
        navigateType: 101574,
        firstCategoryId: 101574,
        secondCategoryId: 101574,
        actualLat: 22.528351,
        actualLng: 114.026983,
        geoType: 2,
        uuid:
          '4A5E01CA7E10CB463AF5C9A965D968B5DD4EFE4277AA19B76309FC00A4EB7E1B',
        platform: 3,
        partner: 4,
        originUrl:
          'https://h5.waimai.meituan.com/waimai/mindex/kingkong?navigateType=101574&firstCategoryId=101574&secondCategoryId=101574&title=%E7%BE%8E%E5%9B%A2%E8%B6%85%E5%B8%82',
        riskLevel: 71,
        optimusCode: 10,
        wm_actual_latitude: 22528351,
        wm_actual_longitude: 114026983,
        openh5_uuid:
          '4A5E01CA7E10CB463AF5C9A965D968B5DD4EFE4277AA19B76309FC00A4EB7E1B',
        _token:
          'eJxNj1mvokAQhf8LrxqbRVlM7gMu7Jvggk7mAZpGENlpESbz3wczmdxJutJ1vlMnqfpFNGpErCmS4khqTrxQQ6wJakEuWGJOdO3krHh2SZI8w7ECOyfgN6M+RXFzImzOO2L9g+FWc56if36AO+lv8N3Ry+l9JtRpgEi6rmrXACSrRR+keZAucpR2OCgWsMzBXwTytIjQGyRljqaViCmcHz9hihLmAv3R2UdPf/Afn6um/PG6f5453TXl2/ReTB3Shu7UPjG3FQ9Ai1RoHCzruUxLmCxlOc9elmWMqZXtSaExpfv1BgrOVDsZnTqMT/uzH1ERpTF1zzZm2deQLI+uncO9P+45mOm6plvP0yxebuLesxOfZJ1RCbGYqWxf8/ojInnU2vB8V+FGYovA3hdJcLyKXa7vhPB5X3a4PL/rZDQaXGOpCEUBv/R+4AOtMD0rumS5F+lmzTOhjoMb9sJbPUj5MOrIvUiNV9PVlSzTZmysJ32JrpdTewj28LQ92i8PIzl7rGhlj4bRAv2hb0ZYzfKNduF17e5r1VbGQeWgI8okL0X9nVk5D3qnlJzz6AGQAQwMN47t3Quk4tVwFTPTt9dnnXru7nESOzfU5DI7UPYgp+7Dl1pgbIKWN5xNe/arIUYqK7QtLBqmjLRQVlZxWvqcn0hxTi9p7U46LGM1pXN7g9lBYSuB48V2I/VO1QfGVrHbHb71O4c3RzBYmHzlUaNUgfGA3kZvaIXrswtn0J7JHM9UFtLnYjtjLAbFKnTiQfz6In7/ARwI7nI=',
      },
      header: { 'content-type': 'multipart/form-data' },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        logger.log(result, '====');
      },
      fail: () => {},
      complete: () => {},
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
