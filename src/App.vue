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
const categories = ref(Object)
const categoryShown = ref(false);
const itemsInCart = ref(Object);
const cartOpen = ref(false);
itemsInCart.value = [];

//'/categories'
fetch('file://home/rafaeltakano/Downloads/ExpressMarket.categories.json', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
  }
})
  .then(
    async res => {
      categories.value = await res.json();
    })
  .catch(error => {
    console.log(error);
  })

function toggleCart() {
  cartOpen.value = !cartOpen.value;
  if (cartOpen.value)
    userAccessOpen.value = false;
}
const userAccessOpen = ref(false);
function toggleUserAccess() {
  userAccessOpen.value = !userAccessOpen.value;
  if (userAccessOpen.value)
    cartOpen.value = false;
}

function addToCart(product) {
  product.qtd = 1;
  if (!itemsInCart.value.includes(product))
    itemsInCart.value.push(product);
}

function removeFromCart(item) {
  if (itemsInCart.value.indexOf(item) != -1)
    itemsInCart.value.splice(itemsInCart.value.indexOf(item), 1)
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

function handleLogin(loginType, email, password) {
  console.log(loginType, email, password)
  //console.log(adminsData.admnins)
  if (loginType === 'client') {
    userLoggedIn.value = true;
    admin.value = false;
  }
  if (loginType === 'admin') {
    // const user = adminsData.admins.find((user) => user.email === email && user.password === password);
    // if (user) {
    // }
    // else {
    //   console.log('login invalido');
    // }
    userLoggedIn.value = true;
    admin.value = true;
    console.log('login sucesso');
  }
}

function confirmPurchase() {
  itemsInCart.value = []
  cartOpen.value = false
}

function handleLogout() {
  userLoggedIn.value = false;
  admin.value = false;
}
</script>

<template>
  <div class="main">
    <AppHeader @toggleCart="toggleCart" @toggleUserAccess="toggleUserAccess" @toggleCategory="toggleCat" :admin="admin" />
    <AppContent @addToCart="addToCart" :category="category" :admin="admin" :products="products" />
    <AppCart v-if="cartOpen && !admin" :items="itemsInCart" @removeItem="removeFromCart"
      @confirmPurchase="confirmPurchase" />
    <AppUserAccess v-if="userAccessOpen" :admin="admin" :userLoggedIn="userLoggedIn" @login="handleLogin"
      @logout="handleLogout" />
    <AppCategory v-if="categoryShown" @set="setCate" @reset="resetCate" :categories="categories" />
  </div>
  <AppFooter class="footer" />
</template>

<style scoped>  .main {
    min-height: calc(100vh - 310px);
  }

  .footer {
    height: 310px;

  }

  @media (max-width: 1280px) {
    .main {
      min-height: calc(100vh - 26vw);
    }

    .footer {
      height: 26vw;
    }
  }
</style>