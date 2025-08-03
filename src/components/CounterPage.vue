<script>
export default {
    name: "HomePage",
    data() {
        return{
            msg2: "はじめまして"
        }
    } 
}
</script>

<script setup>
    import { ref } from "vue"
    const count = ref(0);
    function increment() {
    count.value++;
    }
</script>

<template>
    <div>Counter</div>
    <button type="button" @click="increment">Increment</button>
    <p>{{ count }}</p>
</template>