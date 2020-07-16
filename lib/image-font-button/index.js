Component({
  /**
   * 组件的属性列表
   */
  properties: {
    buttonStyle: {
      type: Object,
      value: {
        areaWidth: 0,
        areaHeight: 0,
        areaBgColor: '',
        isRound: false,
        imgWidth: 0,
        imgHeight: 0,
        iconSize: 0,
        iconColor: '',
        fontColor: '',
        fontSize: 0,
        radius: 0
      }
    },
    imageFront: {
      type: Boolean,
      value: true
    },
    isImage: {
      type: Boolean,
      value: true
    },
    imgSrc: {
      type: String,
      value: ''
    },
    iconName: {
      type: String,
      value: ''
    },
    text: {
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
      console.log(this.data.buttonStyle);
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }

})