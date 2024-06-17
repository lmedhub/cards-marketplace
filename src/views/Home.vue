<!-- src/views/Home.vue -->
<template>
    <div>
      <h2>Marketplace</h2>
      <ul>
        <li v-for="request in tradeRequests" :key="request.id">
          <h3>Offer: {{ request.offerCards.join(', ') }}</h3>
          <p>Request: {{ request.requestCards.join(', ') }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  
  export default defineComponent({
    setup() {
      const tradeRequests = ref([] as Array<{ id: string, offerCards: string[], requestCards: string[] }>)
  
      const fetchTradeRequests = async () => {
        tradeRequests.value = await fetch('/api/trade-requests').then(res => res.json())
      }
  
      onMounted(fetchTradeRequests)
  
      return {
        tradeRequests,
      }
    },
  })
  </script>
  