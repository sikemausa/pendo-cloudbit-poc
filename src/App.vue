<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld.vue'

pendo.initialize({"apiKey":"3f6764dd-1dd1-418f-6bbf-5011bc657b20","visitor":{"id":"_PENDO_T_nyJlG83kiiW","language":"en_US"},"account":{"id":""}})

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
