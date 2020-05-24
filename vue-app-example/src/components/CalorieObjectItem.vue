<template>
<div>
    <transition name="fade">
      <div v-if="loaded" class="container">
        <p class="emphasized">
          Is exual to:
          <span class="big-text">{{(itemNumber/foodItem.calories).toFixed(2)}}</span>
        </p>
        <img v-bind:src="foodItem.image" />
        <div class="name-container">
          <h3>{{foodItem.name}}</h3>
          <p class="one-piece">1 piece has {{foodItem.calories}} calories</p>
        </div>
      </div>
    </transition>
        <div v-if="!loaded" class="empty-state"></div>
</div>
</template>


<script>
import axios from "axios";

const parseReceivedData = data => {
  if (!data) return { undefined };
  const image = data.data.images[0];
  const name = data.data.title;
  const calories = data.data.nutrition.calories;
  return { image, name, calories };
};

export default {
  name: "CalorieObjectItem",
  props: {
    itemNumber: Number,
    prodId: Number
  },
  data() {
    return {
      foodItem: {
        name: "",
        calories: "",
        image: ""
      },
      loaded: false
    };
  },
  created() {
    axios(
      `https://api.spoonacular.com/food/products/${this.prodId}?apiKey=${process.env.VUE_APP_SPOONACULAR_API_KEY}`
    )
      .then(res => (this.foodItem = parseReceivedData(res))).then(() => this.loaded = !!this.foodItem)
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.empty-state {
  width: 360px;
  height: 400px;
  margin: 1rem;
  background-color: #202733;
  filter: blur(8px);
  animation-iteration-count: infinite;
}
.container {
  border: solid black 1px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: auto;
  max-height: 540px;
  margin: 0.5rem;
  padding: 0 1rem;
}

.name-container {
  background: #ee5b5d;
  color: white;
  font-weight: 600;
  border-radius: 0px 0px 16px 16px;
  margin-top: 1rem;
  padding: 2rem 1rem;
  width: 100%;
}
.emphasized {
  font-size: 1.5rem;
  font-weight: 600;
}
.big-text {
  font-size: 2rem;
  font-weight: 800;
}
img {
  width: 200px;
}
h3 {
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.one-piece {
  margin: 0;
  margin-top: 0.5rem;
}
@media only screen and (max-width: 500px) {
  .container {
    width: 80vw;
    height: auto;
    max-height: 460px;
    margin: 0.5rem;
  }

  .name-container {
    margin-top: 0.5rem;
  }
  .emphasized {
    font-size: 1rem;
  }
  .big-text {
    font-size: 1rem;
    font-weight: 800;
  }
  img {
    width: 180px;
  }
  h3 {
    font-size: 1rem;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>