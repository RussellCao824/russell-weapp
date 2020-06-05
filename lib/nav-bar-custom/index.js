Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //如果父页面传入的属性值和属性定义数据类型不一致，组件会自动对其进行转换
    //导航栏背景颜色
    bgColor: {
      type: String,
      value: ''
    },
    //导航栏标题
    title: {
      type: String,
      value: '默认标题'
    },
    //标题颜色
    titleColor: {
      type: String,
      value: '#ffffff'
    },
    //标题字的大小
    titleSize: {
      type: Number,
      value: ''
    },
    //标题字体加粗
    titleWeight: {
      type: String,
      value: ''
    },
    //导航栏返回按钮是否显示
    returnShow: {
      type: Boolean,
      value: false
    },
    //返回图标iconfont名称
    returnIcon: {
      type: String,
      value: 'iconfanhui'
    },
    //返回图标的大小
    returnIconSize: {
      type: Number,
      value: ''
    },
    //导航栏首页按钮是否显示
    indexShow: {
      type: Boolean,
      value: false
    },
    //首页图标iconfont名称
    indexIcon: {
      type: String,
      value: 'iconzhuye'
    },
    //主页图标的大小
    indexIconSize: {
      type: Number,
      value: ''
    },
    //图标颜色
    iconColor: {
      type: String,
      value: ''
    },
    //导航栏搜索框是否展示，(目前仅支持搜索栏显示时，其他的都隐藏)
    searchShow: {
      type: Boolean,
      value: false
    },
    searchIcon: {
      type: String,
      value: 'iconsearch'
    },
    searchPlaceholder: {
      type: String,
      value: '点击进行搜索'
    },
    //搜索栏模式下搜索框附加信息是否显示
    searchSubShow: {
      type: Boolean,
      value: false
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: 0,//动态获取的及其状态栏高度
    capsuleHeight: 32,//小程序导航栏胶囊的固定高度
    navContentHeight: 0,
    searchAreaWidth: 0//搜索栏的动态长度计算，左边距40rpx,右边距20rpx
  },

  /**
   * 自定义组件生命周期函数对象集合
   */
  lifetimes: {
    /**
     * attached阶段，自定义组件的内部数据就可以进行赋值，相当于page的onload生命阶段
     */
    attached: function () {
      //根据不同的机型，动态计算涉及的数值
      //记性屏幕的宽度
      const windowWidth = wx.getSystemInfoSync().windowWidth;
      console.log(windowWidth);
      //药囊上边框距顶部距离
      const capsuleTop = wx.getMenuButtonBoundingClientRect().top;
      //药囊左边框距页面左边距离
      const capsuleLeft = wx.getMenuButtonBoundingClientRect().left;
      console.log(capsuleLeft);
      //状态栏高度
      const statusBarHeight = wx.getSystemInfoSync().statusBarHeight;
      //药囊上边距状态栏下边的距离，即药囊在导航内容栏中的上下边距
      const capsuleGap = capsuleTop - statusBarHeight;
      //导航内容栏的高度动态计算
      const navContentHeight = capsuleGap * 2 + this.data.capsuleHeight;
      //搜索框的宽度为（左边距40rpx,右边距20rpx的情况下）
      const searchAreaWidth = Math.floor(capsuleLeft * 750 / windowWidth - 40);
      console.log(searchAreaWidth);
      this.setData({ statusBarHeight, navContentHeight, searchAreaWidth });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 返回键的点击事件
     * @param {*} event 
     */
    goReturn(event) {
      this.triggerEvent('return');
    },

    /**
     * 主页键的点击事件
     * @param {*} event 
     */
    goIndex(event) {
      this.triggerEvent('index');
    },

    /**
     * 搜索框的点击事件
     * @param {*} event 
     */
    goSearch(event) {
      this.triggerEvent('search');
    }
  }
})