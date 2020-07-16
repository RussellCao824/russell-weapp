import { getNowDate } from '../js/Utils'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //如果父页面传入的属性值和属性定义数据类型不一致，组件会自动对其进行转换
    iconName: {
      type: String,
      value: 'iconRectangleCopy2'
    },
    value: {
      type: String,
      value: getNowDate()
    },
    valueContent: {
      type: String,
      value: getNowDate()
    },
    postTitle: {
      type: String,
      value: '发布'
    },
    title: {
      type: String,
      value: '拍摄于'
    },
    start: {
      type: String,
      value: '2020-01-01'
    },
    end: {
      type: String,
      value: getNowDate()
    },
    mode: {
      type: String,
      value: 'date'
    },
    range: {
      type: Array,
      value: []
    },
    rangeKey: {
      type: String,
      value: 'name'
    },
    pickerShow: {
      type: Boolean,
      value: true
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
     * picker选择响应函数(目前兼容date,time,selector单列选择器)
     * @param {*} event 
     */
    bindDateChange(event) {
      const value = event.detail.value;
      if (this.data.mode == 'date' || this.data.mode == 'time') {
        this.setData({ value, valueContent: value });
      } else if (this.data.mode == 'selector') {
        this.setData({ value, valueContent: this.data.range[value].name });
        //向父页面传递单列选择器选择的子项的索引
        this.triggerEvent('datechange', { value });
      }
    },

    /**
     * 点击发布按钮
     * @param {*} event 
     */
    postSubmit(event) {
      this.triggerEvent('postsubmit', { photoDate: this.data.date });
    }
  }

})