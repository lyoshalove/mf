<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => count.value++;
const decrement = () => count.value--;
</script>

<template>
  <h1>Vue App</h1>
  <h2>Count: {{ count }}</h2>
  <button @click="increment">increment</button>
  <button @click="decrement">decrement</button>
</template>