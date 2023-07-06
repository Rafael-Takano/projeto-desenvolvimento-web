<script setup>
import { ref } from 'vue'
import Categories from './header/HeaderCategory.vue';
import Logo from './header/HeaderLogo.vue';
import navbtn from './header/HeaderButtons.vue'

const screenSize = ref(window.innerWidth);
addEventListener("resize", (event) => {
  screenSize.value = window.innerWidth
});
const emit = defineEmits(['toggleCart', 'toggleCategory', 'toggleUserAccess', 'reset'])
const props = defineProps({
  admin: Boolean
})

function cart() {
  emit('toggleCart')
}
function toggleCategory() {
  emit('toggleCategory')
}
function userAccess() {
  emit('toggleUserAccess')
}
</script>

<template>
  <nav>
    <Categories @toggleCategory="toggleCategory" />
    <Logo @click="emit('reset')" />
    <form v-if="screenSize > 1280">
      <input type="text" name="searchBar" id="searchT" class="search">
      <input type="button" value="Search" id="searchB" class="search">
    </form>
    <navbtn id="userAccessDiv" title="User Access" imgsrc="/imgs/Icons/person.svg" @click="userAccess" />
    <navbtn id="CartDiv" title="Shopping Cart" imgsrc="/imgs/Icons/cart.svg" @click="cart" v-if="!admin" />
  </nav>
  <form v-if="screenSize <= 1280">
    <input type="text" name="searchBar" id="searchT" class="search">
    <input type="button" value="Search" id="searchB" class="search">
  </form>
</template>

<style scoped>
nav {
  background: #fff;
  height: 4.43px;
  width: 100%;
  box-shadow: 0px 2.5px 2.5px rgba(0, 0, 0, 0.25);
  position: fixed;
  display: table;
  z-index: 1;
}

form {
  display: contents;
}

.search {
  margin: 0.598vw 0;
  height: 3.02vw;
}

#searchT,
#searchT::selection {
  width: 20vw;
  margin-left: 5vw;
  border: 2px solid #ac2020;
  border-radius: 10px;
  color: #ac2020;
  outline: none;
  padding-left: 1vw;
}

#searchB {
  width: 5vw;
  margin-left: 1vw;
  border: 2px solid #ac2020;
  border-radius: 10px;
  color: #ac2020;
  font-weight: bold;
  text-transform: uppercase;
}

@media (max-width: 1280px) {
  nav {
    text-align: center;
    height: 45px;
    margin: 0px;
    padding: 0px;
  }

  .search {
    position: fixed;
    top: 50px;
    height: 30px;
    font-size: 12;
    margin: 0;
  }

  #searchT {
    width: 76vw;  
    border-top-right-radius: 0;  
    border-bottom-right-radius: 0;  
    margin: 0;
    left: 2vw;
  }

  #searchB {
    width: 20vw;
    right: 2vw;  
    border-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;  
  }
}
</style>

