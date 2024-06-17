<!-- src/views/Register.vue -->
<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default defineComponent({
    setup() {
      const username = ref('')
      const password = ref('')
      const router = useRouter()
  
      const register = async () => {
        const response = await fetch('/api/register', {
          method: 'POST',
          body: JSON.stringify({ username: username.value, password: password.value }),
        })
        const data = await response.json()
        if (data.success) {
          router.push('/login')
        }
      }
  
      return {
        username,
        password,
        register,
      }
    },
  })
  </script>
  