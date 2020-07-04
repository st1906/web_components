<template>
  <div class="home">
    <legal-banner></legal-banner>
    <CalorieCounter v-bind:calories="calories" v-on:newCalorie="changeCalorie" />
    <CalorieObjectGrid v-bind:calories="calories"/> 
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
    };
  },
  methods: {
    changeCalorie(newCalorie) {
      if(newCalorie > 0)
        this.calories = newCalorie
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
</style>