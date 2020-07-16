import { deepGet } from '../js/Utils'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //如果父页面传入的属性值和属性定义数据类型不一致，组件会自动对其进行转换
    width: {
      type: Number,
      value: 680
    },
    height: {
      type: Number,
      value: 70
    },
    placeholder: {
      type: String,
      value: '搜索'
    },
    backgroundColor: {
      type: String,
      value: '#F5F5F5'
    },
    top: {
      type: Number,
      value: 0
    },
    value: {
      type: String,
      value: ''
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
     * 点击键盘搜索键触发
     * @param {*} event 
     */
    searchConfirm(event) {
      const value = deepGet(event, ['detail', 'value']);
      this.triggerEvent('searchconfirm', { value });
    },

    /**
    * 搜索框输入监听方法
    * @param {*} event 
    */
    searchInput(event) {
      const value = deepGet(event, ['detail', 'value']);
      this.triggerEvent('searchinput', { value });
    }
  }

})