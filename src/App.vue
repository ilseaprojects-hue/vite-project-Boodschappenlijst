<script setup>
import { ref, computed } from 'vue'

const products = ref([
  { name: 'Brood', price: 1.00, quantity: 0 },
  { name: 'Brocoli', price: 0.99, quantity: 0 },
  { name: 'Krentenbollen', price: 1.20, quantity: 0 },
  { name: 'Noten', price: 2.99, quantity: 0 }
])
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
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
  </table>
</template>


<style scoped></style>
