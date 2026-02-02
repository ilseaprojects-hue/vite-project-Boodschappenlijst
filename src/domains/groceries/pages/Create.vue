<script setup>
import GroceryForm from '../components/GroceryForm.vue'
import { addGrocery } from '../store.js'

const grocery = { name: '', price: 0, quantity: 0 }

const handleSubmit = (newGrocery) => {
  addGrocery(newGrocery)
}

</script>

<template>
  <h2>Product toevoegen</h2>
  <GroceryForm :grocery="grocery" @submit="handleSubmit" />
</template>
