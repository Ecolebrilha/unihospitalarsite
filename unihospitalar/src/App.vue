<template>
  <div id="app">
    <HomePrincipal />
    <HomeSobre />
    <HomeDiferenciais />
    <HomeNossosServicos />
    <HomeProdutos />
    <HomeParceiros />
    <HomeContato />
    
  </div>
</template>

<script>
import HomePrincipal from '@/components/HomePrincipal.vue';

export default {
  name: 'App',
  components: {
    HomePrincipal
    
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