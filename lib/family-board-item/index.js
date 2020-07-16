import { deepGet } from '../js/Utils'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //如果父页面传入的属性值和属性定义数据类型不一致，组件会自动对其进行转换
    boardItem: {
      type: Object,
      value: {
        id: 0,//家榜id
        name: '',
        location: '',
        userId: 0,
        headPic: '',
        boardImage: [],
        status: 1,
        likeMember: [],
        hateMember: [],
        boardStory: false,
        time: ''
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusIcon: '',//榜单状态图标
    current: 0,//轮播图当前的图片索引
    loginUserId: wx.getStorageSync('id')//目前登录用户id
  },

  /**
   * 自定义组件生命周期函数对象集合
   */
  lifetimes: {
    /**
     * attached阶段，自定义组件的内部数据就可以进行赋值，相当于page的onload生命阶段
     */
    attached: function () {
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击进入成员列表页
     */
    goMemberList(event) {
      const listType = deepGet(event, ['target', 'dataset', 'type']);
    },

    /**
     * 监听轮播图图片发生变化
     * @param {*} event 
     */
    imageSwitch(event) {
      const current = event.detail.current;
      this.setData({ current });
    },

    /**
     * 点赞或者点踩操作
     * @param {*} event 
     */
    commentHandle(event) {
      const type = deepGet(event, ['currentTarget', 'dataset', 'type']);
      this.triggerEvent('commenthandle', { type });
    },

    /**
     * 删除家榜信息
     * @param {*} event 
     */
    boardDelete(event) {
      const id = deepGet(event, ['currentTarget', 'dataset', 'id']);
      this.triggerEvent('boarddelete', { id });
    }
  }

})