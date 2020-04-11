// pages/location/location.js
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
var qqmapsdk;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    curCity: '',
    cityList: [],
    cityTemp: [],
    scrollTop: 100,
    hotCities: [
      {
        name: '上海',
      },
      {
        name: '深圳',
      },
      {
        name: '济南',
      },
      {
        name: '长春',
      },
      {
        name: '北京',
      },
      {
        name: '杭州',
      },
      {
        name: '三亚',
      },
    ],
    charts: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'W',
      'X',
      'Y',
      'Z',
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.stopLocationUpdate();
    qqmapsdk = new QQMapWX({
      key: 'NLZBZ-36DWF-AAYJK-JIHRY-LPVET-72BPU',
    });
    qqmapsdk.getCityList({
      success: function (data) {
        const handleMunicipality = data.result[0];
        const municipality = data.result[1];
        const municipalityCity = ['11', '12', '31', '50', '71', '81', '82'];
        const removeCharts = [];
        // console.log(city, '====');
        // 获取城市列表 然后按照字母顺序排序
        const cities1 = handleMunicipality.filter((city) => {
          return municipalityCity.includes(city.id.substr(0, 2));
        });
        const cities2 = municipality.filter((distrit) => {
          return !municipalityCity.includes(distrit.id.substr(0, 2));
        });
        let cityArr = [];
        let arr = [];
        arr = arr.concat(cities1, cities2);
        arr = arr.sort(function (c, p) {
          var a = c.pinyin[0].charAt(0);
          var b = p.pinyin[0].charAt(0);
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        // 找到对应字母的城市
        that.data.charts.forEach((chart) => {
          const obj = {};
          const chartCityArr = arr.filter((item) => {
            return item.pinyin[0].charAt(0) == chart.toLowerCase();
          });
          obj.name = chart;
          obj.cities = chartCityArr;
          // console.log(chartCityArr, '+++');

          cityArr.push(obj);
        });
        // 筛选字母表中对应字母开头的城市
        cityArr.map((item, idx) => {
          if (item.cities.length === 0) {
            cityArr.splice(idx, 1);
            removeCharts.push(item.name);
          }
        });
        // 筛选字母表中筛选没有对应字母开头的字母
        const afterRemovedChartsArr = that.data.charts.filter((item) => {
          return !removeCharts.includes(item);
        });
        that.setData({
          cityList: cityArr,
          charts: afterRemovedChartsArr,
        });

        // console.log(municipality, '+++');
        /* that.setData({
          cityList:data
        }) */
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    const that = this;

    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('getCurLocation', function (data) {
      // this.curCity = data.data;
      console.log(data, '----123');
      that.setData({
        curCity: data.data,
      });
    });
  },
  // 点击跳转锚点
  scrollTo(e) {
    var query = wx.createSelectorQuery();
    query.selectViewport().scrollOffset();
    // 获取锚点dom
    query.select('#' + e.currentTarget.id.substr(-1)).boundingClientRect();
    query.exec((res) => {
      wx.pageScrollTo({
        scrollTop: res[0].scrollTop + res[1].top - 100,
      });
    });
  },
  // 返回
  linkBack() {
    wx.navigateBack({
      delta: 1,
    });
  },
  locationTo(e) {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({
      curCity: e.currentTarget.dataset.loc,
    });
    prevPage.onShow();
    wx.navigateBack({
      delta: 1,
    });
  },
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
