<template>
  <div id="app">
    <header>
      <ctc-header></ctc-header>
    </header>
    <section class="main">
      <div class="content">
        <router-view></router-view>
      </div>
    </section>
    <footer>
      <ctc-footer></ctc-footer>
    </footer>
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
