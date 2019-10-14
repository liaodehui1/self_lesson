<template>
  <div id="app">
   <tabs v-model="acitiveKey" @on-click="dis">
     <pane label="标签一" name="1">标签一内容</pane>
     <pane label="标签二" name="2">标签二内容</pane>
     <pane label="标签三" name="3">标签三内容</pane>
   </tabs>
  </div>
</template>

<script>
import tabs from './components/tabs'
import pane from './components/pane'
export default {
  name: 'App',
  components: {
    tabs,
    pane
  },
  data() {
    return {
      acitiveKey:1
    }
  },
  methods: {
    dis(name){
      console.log(this.acitiveKey)
      console.log(name)
    }
  },
}
</script>

<style>

</style>
