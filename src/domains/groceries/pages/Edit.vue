<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <h2>Product bewerken</h2>
  <p>ID: {{ route.params.id }}</p>
</template>
