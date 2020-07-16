Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //如果父页面传入的属性值和属性定义数据类型不一致，组件会自动对其进行转换
    height: {
      type: Number,
      value: 320
    },
    backgroundColor: {
      type: String,
      value: '#3D8DFB'
    },
    radius: {
      type: Number,
      value: 20
    },
    paddingTop: {
      type: Number,
      value: 50
    },
    bgImageShow: {
      type: Boolean,
      value: false
    },
    imageSrc: {
      type: String,
      value: ''
    },
    imageDarkShow: {
      type: Boolean,
      value: false
    },
    imageDark: {
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
  }

})