<template>
  <div id="app">
    <img src="./assets/logo.png" @click="test">
    <div class="rem">rem</div>
    <button @click="test">chat</button>
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
    mounted() {
      this.$socket.on('get', (data) => {
        if (data.id === '1') {
          console.log(data)
        }
      })
    },
    methods: {
      test() {
        this.$socket.emit('send', {id:'1', msg: 'student client'})
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
