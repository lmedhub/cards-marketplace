<!-- src/views/TradeRequest.vue -->
<template>
    <div>
      <h2>Create Trade Request</h2>
      <form @submit.prevent="createTradeRequest">
        <div>
          <h3>Offer Cards</h3>
          <ul>
            <li v-for="card in userCards" :key="card.id">
              <input type="checkbox" :value="card.id" v-model="offerCards" /> {{ card.name }}
            </li>
          </ul>
        </div>
        <div>
          <h3>Request Cards</h3>
          <ul>
            <li v-for="card in allCards" :key="card.id">
              <input type="checkbox" :value="card.id" v-model="requestCards" /> {{ card.name }}
            </li>
          </ul>
        </div>
        <button type="submit">Create Request</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  
  export default defineComponent({
    setup() {
      const userCards = ref([] as Array<{ id: string, name: string }>)
      const allCards = ref([] as Array<{ id: string, name: string }>)
      const offerCards = ref([] as string[])
      const requestCards = ref([] as string[])
  
      const fetchCards = async () => {
        userCards.value = await fetch('/api/user/cards').then(res => res.json())
        allCards.value = await fetch('/api/cards').then(res => res.json())
      }
  
      const createTradeRequest = async () => {
        const tradeRequest = {
          offerCards: offerCards.value,
          requestCards: requestCards.value,
        }
        await fetch('/api/trade-requests', {
          method: 'POST',
          body: JSON.stringify(tradeRequest),
        })
        window.location.href = '/'
      }
  
      onMounted(fetchCards)
  
      return {
        userCards,
        allCards,
        offerCards,
        requestCards,
        createTradeRequest,
      }
    },
  })
  </script>
  