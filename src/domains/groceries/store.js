import { ref, computed } from 'vue'

const groceries = ref([
    { name: 'Brood', price: 1.00, quantity: 0 },
    { name: 'Broccoli', price: 0.99, quantity: 0 },
    { name: 'Krentenbollen', price: 1.20, quantity: 0 },
    { name: 'Noten', price: 2.99, quantity: 0 }
])

export const getAllGroceries = computed(() => groceries.value)
export const getGroceryById = (id) => computed(() => groceries.value.find(g => g.id === id))

export const addGrocery = (grocery) => groceries.value.push(grocery)
export const removeGrocery = (id) => {
  groceries.value = groceries.value.filter(g => g.id !== id)
}
export const updateGrocery = (updatedGrocery) => {
  const index = groceries.value.findIndex(g => g.id === updatedGrocery.id)
  if (index !== -1) groceries.value[index] = updatedGrocery
}
