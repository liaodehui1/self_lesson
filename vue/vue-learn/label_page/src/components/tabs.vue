<template>
  <div class="tabs">
    <div class="tabs-bar">
      <!-- 标题 -->
      <div
        v-for="(item,index) in navList"
        :key="index"
        :class="tabsC(item)"
        @click="handleChange(item)">
        {{item.label}}
      </div>
    </div>
    <div class="tans-content">
      <!-- 内容面板 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:[String,Number]
    }
  },
  data() {
    return {
      currentValue:this.value,
      navList:[]
    }
  },
  methods: {
    // 获取类名
    tabsC(item){
      return [
        'tabs-tab',
        {
          'tabs-tab-active':item.name == this.currentValue
        }
      ]
    },
    // 获取所有pane
    getTabs(){
      return this.$children.filter(item => {
        return item.$options.name === 'pane'
      })
    },
    // 初始化 有三次
    updateNav(){
      // 只有最后一次有效 否则有九个
      this.navList = []
      var tabs = this.getTabs()
      // console.log(tabs)
      tabs.forEach((pane,index) => {
        this.navList.push({
          label:pane.label,
          name:pane.name || index
        })
        // 未给pane.name为null加上name
        if(!pane.name) pane.name = index 
        //未指定activeKey
        if(index === 0){
          // console.log(this.currentValue)
          if(!this.currentValue){
            this.currentValue = pane.name || index
          }
        }
      })

      this.updateStatus()
    },
    // 更新pane显示状态
    updateStatus(){
      this.getTabs().forEach(pane => {
        // console.log(pane.show,pane.name,this.currentValue)
        // pane.name字符串 this.currentValue number
        pane.show = pane.name == this.currentValue
      })
    },
    // 点击事件
    handleChange(item){
      this.currentValue = item.name
      this.$emit('input',item.name)
      // 提供点击事件给父组件使用
      this.$emit('on-click',item.name)
    }
  },
  watch: {
    currentValue:function(){
      this.updateStatus()
    }
  },
}
</script>

<style scoped>
.tabs{
  font-size: 14px;
  color: #657180;
}
.tabs-bar::after{
  content:'';
  display: block;
  width: 100%;
  height: 1px;
  background: #d7dde4;
  margin-top: -1px;
}
.tabs-tab{
  display: inline-block;
  padding: 4px 16px;
  margin-right: 6px;
  background: #fff;
  border: 1px solid #d7dde4;
  cursor: pointer;
  position: relative;
}
.tabs-tab-active{
  color:#3399ff;
  border-top: 1px solid #3399ff;
  border-bottom: 1px solid #fff;
}
.tabs-tab-active::before{
  content:'';
  display: block;
  height: 1px;
  background: #3399ff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.tabs-content{
  padding: 8px 0;
}
</style>