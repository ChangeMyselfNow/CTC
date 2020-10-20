<template>
  <div id="app">
    <ctc-header></ctc-header>
    <div class="main">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <ctc-footer></ctc-footer>
  </div>
</template>

<script>
import ctcHeader from './components/header.vue'
import ctcFooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    ctcHeader,
    ctcFooter
  }
}
</script>

<style lang='scss' scoped>
#app {
  height: 100%;
  .content{
    margin-top: 20px;
    margin-bottom:20px;
  }
}
</style>
