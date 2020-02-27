//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  //事件处理函数
  bindViewTap: function(event) {
    console.log(event)
    wx.navigateTo({
      url: '../logs/logs?name=raymond&gender=male'
    })
  },
  onPullDownRefresh: function() {
    // 触发下拉刷新时执行
    this.setData({
        motto: "lalala"
      }),
      wx.showModal({

        title: '标题',

        content: '告知当前状态，信息和解决方法',

        confirmText: '主操作',

        cancelText: '次要操作',

        success: function(res) {

          if (res.confirm) {

            console.log('用户点击主操作')

          } else if (res.cancel) {

            console.log('用户点击次要操作')

          }

        }

      })
    // wx.scanCode({
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
  },
  onTabItemTap(item) {
    // tab 点击时执行
    console.log("tab 点击时执行")
  },
  onLoad: function (option) {
    // 获取系统信息
    // wx.getSystemInfo({
    //   success: function(res) {
    //     console.log(res)
    //   },
    // })

    // 获取本次小程序启动时的参数
    // let a = wx.getEnterOptionsSync()
    // console.log(a)

    // 标题加载中
    // wx.showNavigationBarLoading()

    // 自定义标题
    // wx.setNavigationBarTitle({
    //   title:"自定义"
    // })

    //显示消息提示框
    // wx.showToast({
    //   title: "成功",
    //   icon: "loading",
    //   duration: 3000
    // })

    //显示模态对话框
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

    // 显示 loading 提示框
    // wx.showLoading({
    //   title: '加载中',
    // })

    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000)

    // 显示操作菜单
    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success(res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail(res) {
    //     console.log(res.errMsg)
    //   }
    // })

    // 动态设置窗口的背景色
    // wx.setBackgroundColor({
    //   backgroundColor:"#fff"
    // })

    // 动态加载网络字体
    // wx.loadFontFace({
    //   family: 'Bitstream Vera Serif Bold',
    //   source: 'url("https://sungd.github.io/Pacifico.ttf")',
    //   success: console.log
    // })

    // 开始下拉刷新
    // wx.startPullDownRefresh()

    // 停止当前页面下拉刷新
    // wx.stopPullDownRefresh()

    // 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位
    // wx.pageScrollTo({
    //   scrollTop: 150,
    //   duration: 300
    // })

    // 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
    // let r =wx.getMenuButtonBoundingClientRect()
    wx.showShareMenu({
      withShareTicket: true
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})