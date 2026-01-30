
import Overview from './pages/Overview.vue'
import Create from './pages/Create.vue'
import Edit from './pages/Edit.vue'

export default [
  {
    path: '/',            
    name: 'Overview',
    component: Overview
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/edit/:id',   
    name: 'Edit',
    component: Edit,
    props: true         
  }
]
