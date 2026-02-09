<script setup>
import { ref } from 'vue'

const props = defineProps({
  grocery: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['submit'])

const groceryRef = ref({ ...props.grocery })

const onSubmit = () => {
    emit('submit', groceryRef.value)
}
</script>


<template>
  <form @submit.prevent="onSubmit" class="grocery-form">
    <div class="form-row">
      <label for="name">Naam:</label>
      <input id="name" v-model="groceryRef.name" />
    </div>

    <div class="form-row">
      <label for="quantity">Aantal:</label>
      <input id="quantity" v-model.number="groceryRef.quantity" />
    </div>

    <div class="form-row">
      <label for="price">Prijs:</label>
      <input id="price" v-model.number="groceryRef.price" step="0.01" />
    </div>

    <div class="form-actions">
      <button type="submit">Opslaan</button>
    </div>
  </form>
</template>

<style scoped>
.grocery-form {
  background-color: #242424;
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.form-row label {
  font-weight: 500;
}

.form-row input {
  padding: 0.5em;
  border-radius: 6px;
  border: none;
  background-color: #1a1a1a;
  color: white;
  font-size: 1rem;
}

.form-row input:focus {
  outline: 2px solid #646cff;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

.form-actions button {
  background-color: #7556bd; 
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: white;
  cursor: pointer;
}

.form-actions button:hover {
  background-color: #402b72; 
}
</style>

