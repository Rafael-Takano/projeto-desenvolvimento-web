<script setup>
  import { ref } from 'vue'
  import AppHeader from './components/AppHeader.vue'
  import AppContent from './components/AppContent.vue';
  import AppFooter from './components/AppFooter.vue';
  import AppCart from './components/AppCart.vue';

  const itemsInCart = ref(Object)
  const cartOpen = ref(false)
  function toggleCart() {
    cartOpen.value = !cartOpen.value;
  }
</script>

<template>
  <AppHeader @toggleCart="toggleCart"/>
  <AppContent />
  <AppCart v-if="cartOpen"/>
  <AppFooter />
</template>
