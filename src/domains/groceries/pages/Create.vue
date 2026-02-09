<script setup>
import GroceryForm from '../components/GroceryForm.vue'
import { addGrocery } from '../store.js'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const grocery = reactive({
  name: '',
  price: 0,
  quantity: 0
})

const handleSubmit = (newGrocery) => {
  addGrocery(newGrocery)
  router.push('/')
}

</script>

<template>
  <h2>Product toevoegen</h2>
  <GroceryForm :grocery="grocery" @submit="handleSubmit" />
</template>
