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
        align-items: baseline;
    }
    p {
        padding: 2rem;
        font-size: 2.5rem;
    }
    button {
        width: 140px;
        height: 140px;
        font-size: 3rem;
        border-radius: 50%;
        border-color: #202733;
        color: #202733;
        background-color: white;
        cursor: pointer;

    }
    button:focus{
        outline-color: #202733;
        outline-width: thin;
        outline-style: solid;
        background-color: #202733;
        color: white;
    }
    @media only screen and (max-width: 600px){
        p {
        padding: 0.5rem;
        font-size: 1.5rem;
    }
    button {
        width: 80px;
        height: 80px;
        font-size: 1rem;
        border-radius: 50%;
        border-color: #202733;
        color: #202733;
        background-color: white;
        cursor: pointer;
    }
    }
</style>