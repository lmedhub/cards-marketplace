// src/store/index.ts (usando Vuex)
import { createStore } from 'vuex'

interface User {
  id: string
  username: string
}

interface Card {
  id: string
  name: string
}

interface TradeRequest {
  id: string
  offerCards: string[]
  requestCards: string[]
}

interface State {
  user: User | null
  cards: Card[]
  tradeRequests: TradeRequest[]
}

export default createStore<State>({
  state: {
    user: null,
    cards: [],
    tradeRequests: [],
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user
    },
    setCards(state, cards: Card[]) {
      state.cards = cards
    },
    setTradeRequests(state, tradeRequests: TradeRequest[]) {
      state.tradeRequests = tradeRequests
    },
  },
  actions: {
    async fetchCards({ commit }) {
      // Fetch cards from API or mock data
      const cards: Card[] = await fetch('/api/cards').then(res => res.json())
      commit('setCards', cards)
    },
    async fetchTradeRequests({ commit }) {
      // Fetch trade requests from API or mock data
      const tradeRequests: TradeRequest[] = await fetch('/api/trade-requests').then(res => res.json())
      commit('setTradeRequests', tradeRequests)
    },
  },
  modules: {},
})
