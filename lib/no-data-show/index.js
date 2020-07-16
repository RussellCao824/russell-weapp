Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    text: {
      type: String,
      value: '暂无数据'
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
  }

})