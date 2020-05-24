<template>
    <div class="container">
    <div v-bind:key="ids" v-for="ids in products">
        <CalorieObjectItem  v-bind:itemNumber="calories" v-bind:prodId="ids" />
    </div>
    </div>
</template>
<script>

import CalorieObjectItem from "@/components/CalorieObjectItem.vue";

const foodArrayIds = [192386, 143790, 208666, 214146, 180024, 406129, 90590]

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
    this.products = foodArrayIds;
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