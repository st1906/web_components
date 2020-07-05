<template>
  <div id="app">
    <legal-banner style="width: 102%" banner-title='By using this app you accept our privacy policy' 
    type='small'></legal-banner>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color:white;
}

#nav a.router-link-exact-active {
  color: #D1F7EC;
}
</style>
