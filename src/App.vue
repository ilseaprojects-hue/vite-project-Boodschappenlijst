<script setup>
import { ref, computed } from 'vue'

const products = ref([
  { name: 'Brood', price: 1.00, quantity: 0 },
  { name: 'Brocoli', price: 0.99, quantity: 0 },
  { name: 'Krentenbollen', price: 1.20, quantity: 0 },
  { name: 'Noten', price: 2.99, quantity: 0 }
])

const total = computed(() =>
  products.value.reduce((sum, product) => sum + product.price * product.quantity, 0)
)
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Prijs</th>
        <th>Hoeveelheid</th>
        <th>Subtotaal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products" :key="index">
        <td>{{ product.name }}</td>
        <td>{{ product.price.toFixed(2) }}</td>
        <td>
          <input type="number" v-model.number="product.quantity" min="0" />
        </td>
        <td>{{ (product.price * product.quantity).toFixed(2) }}</td>
      </tr>
    </tbody>
<tfoot>
  <tr>
    <td colspan="3">Totaal</td>
    <td>{{ total.toFixed(2) }}</td>
  </tr>
</tfoot>
  </table>
</template>


<style scoped></style>
