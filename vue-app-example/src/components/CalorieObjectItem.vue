<template>
    <div>
        <h3>{{foodItem.name}}</h3>
        <img v-bind:src="foodItem.image"/>
        <p class="emphasized">Is exual to: {{(itemNumber/foodItem.calories).toFixed(2)}}</p>
         <p>1 piece has {{foodItem.calories}} calories</p>
    </div>
</template>


<script>

import axios from 'axios'

const parseReceivedData = (data) => {
  if(!data) return {undefined}
  const image = data.data.images[0]
  const name = data.data.title
  const calories = data.data.nutrition.calories
  return {image, name, calories}
} 

export default {
    name: "CalorieObjectItem",
    props: {
        itemNumber: Number,
        prodId: Number
    },
    data(){
        return {
            foodItem: {
                name: "",
                calories: "",
                image: ""
            }
        }
    },
    created(){
        axios(`https://api.spoonacular.com/food/products/${this.prodId}?apiKey=${process.env.VUE_APP_SPOONACULAR_API_KEY}`)
        .then(res => this.foodItem = parseReceivedData(res))
        .catch(err => console.log(err))
    }
}
</script>

<style scoped>
    div {
        border: solid black 1px;
        border-radius: 0 0px 16px 16px;
        display: flex;
        flex-direction: column;
        padding: 0rem 0.5rem 1rem 0.5rem;
        align-items: center;
        width: 380px;
        height: auto;
        margin: 0.5rem;
    }
    .emphasized {
        font-size: 1.5rem;
        font-weight: 600;
    }
    h3 {
        background: red;
        font-weight: 600;
        padding: 0.5rem;
        margin: 0;
        margin-bottom: 1rem;
        width: 100%;
    }
</style>