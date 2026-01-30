// State
import { ref } from 'vue'
import { computed } from 'vue'
// import GroceriesTable from '../../../../components/GroceriesTable.vue'
const products = ref([
    { name: 'Brood', price: 1.00, quantity: 0 },
    { name: 'Brocoli', price: 0.99, quantity: 0 },
    { name: 'Krentenbollen', price: 1.20, quantity: 0 },
    { name: 'Noten', price: 2.99, quantity: 0 }
])


// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = (grocery) => groceries.value.push(grocery);