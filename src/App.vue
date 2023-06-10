<script setup>
  import { ref } from 'vue'
  import AppHeader from './components/AppHeader.vue'
  import AppContent from './components/AppContent.vue';
  import AppFooter from './components/AppFooter.vue';
  import AppCart from './components/AppCart.vue';

  const itemsInCart = ref(Object);
  itemsInCart.value = [];
  const cartOpen = ref(false)
  function toggleCart() {
    cartOpen.value = !cartOpen.value;
  }

  function addToCart(product) {  
    product.qtd = 1;    
    if (!itemsInCart.value.includes(product))
      itemsInCart.value.push(product);          
  }

  function removeFromCart(item) {
    if(itemsInCart.value.indexOf(item) != -1)
      itemsInCart.value.splice(itemsInCart.value.indexOf(item),1)
    console.log('tried');
  }

</script>

<template>
  <AppHeader @toggleCart="toggleCart"/>
  <AppContent @addToCart="addToCart"/>
  <AppCart v-if="cartOpen" :items="itemsInCart" @removeItem="removeFromCart"/>
  <AppFooter />
</template>
