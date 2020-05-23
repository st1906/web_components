<template>
    <div>
        <button v-on:click="$emit('newCalorie', calories - 100)"> - </button>
        <p>{{calories}} kcal</p>
        <button  v-on:click="$emit('newCalorie', calories + 100)"> + </button>
    </div>
</template>

<script>
export default {
    name: "CalorieCounter",
    props: {
        calories: Number
    }
}
</script>

<style scoped>
    div {
        display: flex;

    }
    p {
        padding: 2rem;
        font-size: 2rem;
    }
    button {
        width: 140px;
        height: 140px;
        font-size: 2rem;
    }

</style>