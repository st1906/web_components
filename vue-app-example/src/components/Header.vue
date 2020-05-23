<template>
    <header id="nav">
        <h1>Calories equal to?</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
    #nav {
        width: 100%;
        margin: 0;
        background-color: yellow;
    }
</style>