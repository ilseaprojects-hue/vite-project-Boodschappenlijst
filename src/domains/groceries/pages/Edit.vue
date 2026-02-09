<script setup>
import { useRoute, useRouter } from 'vue-router'
import GroceryForm from '../components/GroceryForm.vue'
import { getGroceryById, updateGrocery } from '../store.js'

const route = useRoute()
const router = useRouter()

// Haal de juiste grocery uit de store
const grocery = getGroceryById(route.params.id)
console.log('Grocery to edit:', grocery)

const handleSubmit = (updatedGrocery) => {
  updateGrocery(updatedGrocery)
  
  // Optioneel: terug naar home na opslaan
  router.push('/')
}
</script>

<template>
  <div v-if="grocery">
    <h2>Product bewerken</h2>
    <GroceryForm :grocery="grocery" @submit="handleSubmit" />
  </div>

  <div v-else>
    <p>Product niet gevonden.</p>
  </div>
</template>
