<template>
  <div id="app">
    <nav-bar></nav-bar>   	
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  components:{
    'nav-bar':Nav
  }
}
</script>
<style>
</style>
