// components/common-head/com.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    title:{
      type:String,
      value:"首页",
      // observer:(newval,oldval)=>{
      //   console.log("值变化了","+newval");
      // }
    }
  },
  observers:{
    'title':(newVal)=>{
      console.log('值变化了'+newVal);
    }//相当于vuewatch属性
  },
  /**
   * 组件的初始数据
   */
  data: {
    mation:"我是子组件的数据"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    emitData(){
      //向父组件传数据
      this.triggerEvent("emit",this.data.mation);
    }
  }
})
