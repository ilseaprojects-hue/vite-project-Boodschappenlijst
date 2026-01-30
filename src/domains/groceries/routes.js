// src/domains/groceries/routes.js

import Overview from './pages/Overview.vue'
import Create from './pages/Create.vue'
import Edit from './pages/Edit.vue'

// Definieer de routes voor het groceries-domein
export default [
  {
    path: '/',               // dit is de “root” route van je app
    name: 'Overview',
    component: Overview
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/edit/:id',       // dynamische route voor bewerken
    name: 'Edit',
    component: Edit,
    props: true              // maakt route param “id” beschikbaar als prop
  }
]
