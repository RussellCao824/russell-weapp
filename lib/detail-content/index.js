import { deepGet } from '../js/Utils'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //如果父页面传入的属性值和属性定义数据类型不一致，组件会自动对其进行转换
    detailInfo: {
      type: Array,
      value: []
    },
    button: {
      type: Array,
      value: ['审核通过', '审核拒绝']
    },
    radius: {
      type: Number,
      value: 36
    },
    top: {
      type: Number,
      value: 300
    },
    hasImage: {
      type: Boolean,
      value: false
    },
    imageList: {
      type: Array,
      value: []
    },
    buttonCustom: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
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
     * 点击预览图片
     * @param {*} event 
     */
    imagePreview(event) {
      const index = deepGet(event, ['currentTarget', 'dataset', 'index']);
      wx.previewImage({
        current: this.data.imageList[index], // 当前显示图片的http链接
        urls: this.data.imageList // 需要预览的图片http链接列表
      })
    },

    /**
     * 点击Button触发事件
     * @param {*} event 
     */
    buttonClick(event) {
      const index = deepGet(event, ['currentTarget', 'dataset', 'index']);
      this.triggerEvent('buttonclick', { index });
    }
  }

})