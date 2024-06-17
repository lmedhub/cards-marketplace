<!-- src/components/CardList.vue -->
<template>
    <div>
      <h2>Your Cards</h2>
      <ul>
        <li v-for="card in cards" :key="card.id">{{ card.name }}</li>
      </ul>
      <button @click="addCard">Add Card</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  
  export default defineComponent({
    setup() {
      const cards = ref([] as Array<{ id: string, name: string }>)
  
      const fetchCards = async () => {
        const response = await fetch('/api/user/cards')
        cards.value = await response.json()
      }
  
      const addCard = async () => {
        const newCard = { name: 'New Card' }
        await fetch('/api/user/cards', {
          method: 'POST',
          body: JSON.stringify(newCard),
        })
        fetchCards()
      }
  
      onMounted(fetchCards)
  
      return {
        cards,
        fetchCards,
        addCard,
      }
    },
  })
  </script>
  