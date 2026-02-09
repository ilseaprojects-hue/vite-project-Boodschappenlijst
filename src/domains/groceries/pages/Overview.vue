<script setup>
import { computed } from 'vue'
import GroceriesTable from '../components/GroceriesTable.vue'
import { getAllGroceries } from '../store.js'

const groceries = computed(() => getAllGroceries.value)
</script>

<template>
  <div>
    <GroceriesTable :products="groceries" />
  </div>
</template>
