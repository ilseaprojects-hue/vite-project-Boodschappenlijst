// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import groceriesRoutes from '../domains/groceries/routes'

// Maak de router aan
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...groceriesRoutes
  ]
})

export default router
