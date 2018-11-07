<template>
  <div id="app">
    <img src="./assets/logo.png" @click="test">
    <div class="rem">rem</div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    sockets: {
      connect() {
        console.log(`connected to service`)
      }
    },
    methods: {
      test() {
        this.$post({
          url: this.$api.hello,
          param: {name: 'alex'},
          postType: 'json'
        })
        // this.$socket.emit('test')
      }
    }
  }
</script>

<style>
  .rem {
    font-size: 20px;
  }
  #app {
    text-align: center;
  }
</style>
