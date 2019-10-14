<template>
  <div class="pane" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'pane',
  data() {
    return {
      show:false
    }
  },
  props:['label','name'],
  methods: {
    updateNav(){
      this.$parent.updateNav()
    }
  },
  // 面板内容好了再通知父组件tans
  mounted() {
    this.updateNav()
  },
}
</script>

<style>

</style>