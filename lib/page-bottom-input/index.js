import { deepGet, getNavigationBarHeight } from '../../../helpers/Utils'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    cursorSpacing: {
      type: String,
      value: '0rpx'
    },
    placeholder: {
      type: String,
      value: '请输入内容~'
    },
    submitText: {
      type: String,
      value: '提交'
    },
    maxLength: {
      type: Number,
      value: 140
    },
    headImg: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: '',
    tabbarHeight: 0,//tabbar高度
    inputBottom: 0,
    textareaInitHeight: 50,//理由输入框的初始高度 rpx
    inputViewHeight: 100//理由输入框包裹层的初始高度 rpx
  },

  /**
   * 自定义组件生命周期函数对象集合
   */
  lifetimes: {
    /**
     * attached阶段，自定义组件的内部数据就可以进行赋值，相当于page的onload生命阶段
     */
    attached: function () {
      const that = this;
      wx.getSystemInfo({
        success(res) {
          console.log(res);
          const tabbarHeight = res.screenHeight - res.statusBarHeight - res.windowHeight - getNavigationBarHeight();
          console.log(tabbarHeight);
          that.setData({ tabbarHeight });
        }
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击遮罩层，隐藏组件本身及键盘
     */
    overlayHide() {
      this.setData({
        show: false
      });
      //隐藏键盘
      wx.hideKeyboard({
        complete: res => {
        }
      })
    },

    /**
  * 监听页面键盘高度变化(只能监听在键盘上手动按隐藏键使键盘高度发生的变化，由于设置hold-keyboard为false，点击页面导致的键盘消失的高度变化并不能监听到)
  * @param {*} event 
  */
    keyboardHeightChange(event) {
      const height = deepGet(event, ['detail', 'height']);
      console.log(height);
      if (height == 0) {
        //height为0证明键盘已经收起，此时需要隐藏输入框和遮罩层
        this.setData({
          reasonInputShow: false
        });
      } else {
        //若不为0，则绝对定位输入框
        //计算键盘高度和tabbar高度差，将其设置为input框距底部的距离
        const inputBottom = height - this.data.tabbarHeight;
        console.log(this.data.tabbarHeight);
        console.log(inputBottom);
        this.setData({ inputBottom });
      }
    },

    /**
    * 监控textarea中换行事件，相应调整最外层view的高度
    * @param {*} event 
    */
    lineChange(event) {
      const height = deepGet(event, ['detail', 'height']);
      console.log(height);
      //计算与初始时输入框的高度差
      const heightDiff = height * 2 - this.data.textareaInitHeight;
      const inputViewHeight = 100 + heightDiff;
      console.log(inputViewHeight);
      //相应的改变输入框包裹view的高度，使其实现从下往上增加高度
      this.setData({ inputViewHeight });
    },

    /**
       * 获取输入值
       * @param {*} event 
       */
    input(event) {
      this.setData({ inputValue: deepGet(event, ['detail', 'value']) });
    },

    /**
     * 点击提交按键触发
     */
    submit() {
      this.triggerEvent('submit', { inputValue: this.data.inputValue });
    }
  },

})