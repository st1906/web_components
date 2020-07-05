<template>
  <div class="home">
    <CalorieCounter v-bind:calories="calories" v-on:newCalorie="changeCalorie" v-bind:isError="isError"/>
    <div class="home-container">
      <CalorieObjectGrid v-bind:calories="calories"/> 
      <aside>
        <div class="widget-container">
        <p>Social media links</p>
        <social-media-widget
          facebook-link='https://www.facebook.com/facebook'
          twitter-link='https://twitter.com/Twitter'
          youtube-link='https://www.youtube.com/user/YouTube'
      ></social-media-widget>
      <div>
        <p>Buy our product for just: 
          <inflation-converter money-value=100 start-date='2012/1/1'>
        </inflation-converter></p>
        <p>The price hasn't changed since 2012</p>
        <p>Hover to check inflation</p>
      </div>
      </div>
      </aside>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CalorieCounter from "@/components/CalorieCounter.vue"
import CalorieObjectGrid from "@/components/CalorieObjectGrid.vue"

export default {
  name: "Home",
  components: {
    CalorieCounter,
    CalorieObjectGrid
  },
  data() {
    return {
      calories: 100,
      isError: false,
    };
  },
  methods: {
    changeCalorie(newCalorie) {
      this.isError = false;
      if(newCalorie !== this.calories && newCalorie > 0)
        this.calories = newCalorie
      if(this.calories===100 && newCalorie===100)
        this.isError = true;
    }
  },
};
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    width: 100%;
  }
  .home-container {
    display: flex;
    flex-direction: row;
  }
  .widget-container {
    border: black 1px solid;
    border-radius: 16px;
    padding: 1rem 2rem;
  }
</style>