<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter.vue';
import AppCart from './components/AppCart.vue';
import AppCategory from './components/AppCategory.vue';
import AppUserAccess from './components/AppUserAccess.vue';

const admin = ref(false);
const userLoggedIn = ref(false);
const category = ref('');
const categories = ref(Object)
const categoryShown = ref(false);
const itemsInCart = ref(Object);
const cartOpen = ref(false);
const toggleCate = ref(0);
const user = ref(Object)
itemsInCart.value = [];


fetch('/categories', {
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
  toggleCate.value = 1
  category.value = cate
}

function resetCate() {
  toggleCate.value = 1
  category.value = ''
}

function handleLogin(loginType, usr) {
  if (usr == 0) {
    alert('Wrong Credentials')
    userLoggedIn.value = false;
    admin.value = false;
  }
  else if (loginType == 'admin'){
    user.value = usr;
    userLoggedIn.value = true;
    admin.value = true;
  }
  else if (loginType == 'client'){
    user.value = usr;
    userLoggedIn.value = true;
    admin.value = false;
  }    
}

function confirmPurchase() {
  itemsInCart.value = []
  cartOpen.value = false
}

function handleLogout() {
  userLoggedIn.value = false;
  admin.value = false;
  user_id.value = 0;
}
</script>

<template>
  <div class="main">
    <AppHeader @toggleCart="toggleCart" @toggleUserAccess="toggleUserAccess" @toggleCategory="toggleCat" :admin="admin" @reset="resetCate" />
    <AppContent @addToCart="addToCart" :category="category" :admin="admin" :categories="categories" :toggleCat="toggleCate" @untoggleCat="toggleCate = 0"/>
    <AppCart v-if="cartOpen && !admin" :items="itemsInCart" @removeItem="removeFromCart" :logged="userLoggedIn" @confirmPurchase="confirmPurchase" @untoggleCat="toggleCate = -1"/>
    <AppUserAccess v-if="userAccessOpen" :admin="admin" :userLoggedIn="userLoggedIn" @login="handleLogin" @logout="handleLogout" :user="user"/>
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