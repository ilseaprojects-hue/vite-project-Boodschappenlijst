<script setup>
import { ref } from 'vue'
import GroceriesTable from './components/GroceriesTable.vue';

const products = ref([
    { name: 'Brood', price: 1.00, quantity: 0 },
    { name: 'Brocoli', price: 0.99, quantity: 0 },
    { name: 'Krentenbollen', price: 1.20, quantity: 0 },
    { name: 'Noten', price: 2.99, quantity: 0 }
])

</script>

<template>
  <div>
    <h1>Mijn Boodschappenlijst</h1>
    <GroceriesTable :products="products" />
  </div>
</template>

<style scoped></style>