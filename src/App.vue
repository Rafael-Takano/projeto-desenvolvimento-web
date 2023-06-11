<script setup>
  import { ref } from 'vue'
  import AppHeader from './components/AppHeader.vue'
  import AppContent from './components/AppContent.vue';
  import AppFooter from './components/AppFooter.vue';
  import AppCart from './components/AppCart.vue';
  import AppCategory from './components/AppCategory.vue';

  const admin = ref(false);
  const category = ref('');
  const categoryShown = ref(false);
  const set = ref(false);
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

  function toggleCat() {
    categoryShown.value = !categoryShown.value;
  }

  function setCate(cate) {
    category.value = cate
  }

  function resetCate() {
    category.value = ''
  }
</script>

<template>
  <AppHeader @toggleCart="toggleCart" @toggleCategory="toggleCat" :admin="admin"/>
  <AppContent @addToCart="addToCart" :category="category" :admin="admin"/>
  <AppCart v-if="cartOpen && !admin" :items="itemsInCart" @removeItem="removeFromCart"/>
  <AppCategory v-if="categoryShown" @set="setCate" @reset="resetCate"/>
  <AppFooter />
</template>
