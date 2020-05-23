<template>
    <div class="container">
    <div v-bind:key="ids" v-for="ids in products">
        <CalorieObjectItem  v-bind:itemNumber="calories" v-bind:prodId="ids" />
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import CalorieObjectItem from "@/components/CalorieObjectItem.vue";

const parseReceivedData = (data) => {
  if(!data) return {undefined}
  const products = data.data.products;
  return products.map(prod => prod.id)
} 

export default {
  name: "CalorieObjectGrid",
  components: {
    CalorieObjectItem
  },
  props: {
      calories: Number
  },
  data() {
    return {
      products: [],
    };
  },
  created(){
    axios(`https://api.spoonacular.com/food/products/search?apiKey=${process.env.VUE_APP_SPOONACULAR_API_KEY}&query="pizza"`)
        .then(res => this.products = parseReceivedData(res))
        .catch(err => console.log(err))
  }
};

</script>

<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1440px;
  }
</style>