Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //如果父页面传入的属性值和属性定义数据类型不一致，组件会自动对其进行转换
    memberItem: {
      type: Object,
      value: {
        name: '',
        headPic: '',
        signature: '',
        assistInfo: '',
        iconShow: false,
        iconName: '',
        iconColor: '',
        infoShow: false,
        extraInfo: ''
      }
    },
    //控制icon位的内容是否可以自己定制
    assistInfoCustom: {
      type: Boolean,
      value: false
    },
    signatureColor: {
      type: String,
      value: 'font-color-gray'
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