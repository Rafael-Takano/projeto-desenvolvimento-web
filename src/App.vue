<script setup>
  import { ref } from 'vue'
  import AppHeader from './components/AppHeader.vue'
  import AppContent from './components/AppContent.vue';
  import AppFooter from './components/AppFooter.vue';
  import AppCart from './components/AppCart.vue';
  import AppCategory from './components/AppCategory.vue';
  import AppUserAccess from './components/AppUserAccess.vue';

  import adminsData from './components/json/admins.json';
  import customersData from './components/json/customers.json';

  const admin = ref(false);
  const userLoggedIn = ref(false);
  const category = ref('');
  const categoryShown = ref(false);
  const set = ref(false);
  const itemsInCart = ref(Object);
  itemsInCart.value = [];

  const cartOpen = ref(false);
  function toggleCart() {
    cartOpen.value = !cartOpen.value;
    if(cartOpen.value)
      userAccessOpen.value = false;
  }
  const userAccessOpen = ref(false);
  function toggleUserAccess() {
    userAccessOpen.value = !userAccessOpen.value;   
    if(userAccessOpen.value)
      cartOpen.value = false;
  }

  function addToCart(product) {  
    product.qtd = 1;    
    if (!itemsInCart.value.includes(product))
      itemsInCart.value.push(product);          
  }

  function removeFromCart(item) {
    if(itemsInCart.value.indexOf(item) != -1)
      itemsInCart.value.splice(itemsInCart.value.indexOf(item),1)   
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

  function handleLogin(loginType, email, password){
    console.log(loginType, email, password)
    console.log(adminsData.admins)
    if(loginType === 'client'){
      userLoggedIn.value = true;
      admin.value = false;
    }
    if(loginType === 'admin'){
      //const user = adminsData.admins.find(user => user.email === email && user.password === password);
        userLoggedIn.value = true;
        admin.value = true;
        console.log('login sucesso');

    }
  }

  function handleLogout(){
    userLoggedIn.value = false;
    admin.value = false;
  }
</script>

<template>
  <AppHeader @toggleCart="toggleCart" @toggleUserAccess="toggleUserAccess" @toggleCategory="toggleCat" :admin="admin"/>
  <AppContent @addToCart="addToCart" :category="category" :admin="admin"/>
  <AppCart v-if="cartOpen && !admin" :items="itemsInCart" @removeItem="removeFromCart"/>
  <AppUserAccess v-if="userAccessOpen" :admin="admin" :userLoggedIn="userLoggedIn" @login="handleLogin" @logout="handleLogout"/>
  <AppCategory v-if="categoryShown" @set="setCate" @reset="resetCate"/>
  <AppFooter />
</template>
