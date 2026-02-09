<script setup>
import { ref, watch } from 'vue'

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
    <form @submit.prevent="onSubmit">
        <div>
            <label for="name">Naam:</label>
            <input v-model="groceryRef.value.name" />
        </div>

        <div>
            <label for="quantity">Aantal:</label>
            <input v-model.number="groceryRef.value.quantity" />
        </div>

        <div>
            <label for="price">Prijs:</label>
            <input v-model.number="groceryRef.value.price" step="0.01" />   
        </div>

        <button type="submit">Opslaan</button>
    </form>
</template>
