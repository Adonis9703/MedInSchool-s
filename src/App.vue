<template>
  <div id="app">
    <img src="./assets/logo.png" @click="test">
    <div class="rem">rem</div>
    <button @click="login">login</button>
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
          console.log(data)
      })
    },
    methods: {
      test() {
        this.$socket.emit('send', {id:'1', msg: 'student client'})
      },
      login() {
        this.$post({
          url: this.$apis.login,
          param: {
            studentId: '5150510116',
            password: '123456'
          },
          postType: 'json'
        }).then(res => {
          this.$socket.emit('login', {userId: '5150510116'})
          console.log(res.data)
        })
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
