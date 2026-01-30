<template>
  <div>
    <h2>Overzicht Boodschappen</h2>
    <GroceriesTable :products="groceries" />
  </div>
</template>

<script setup>
import { getAllGroceries } from '../store.js'
import GroceriesTable from '../../../components/GroceriesTable.vue'

const groceries = getAllGroceries
</script>