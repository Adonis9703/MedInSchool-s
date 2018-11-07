<template>
  <div id="app">
    <img src="./assets/logo.png" @click="test">
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
