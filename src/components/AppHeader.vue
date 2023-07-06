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
    <navbtn id="userAccessDiv" title="User Access" imgsrc="/imgs/Icons/person.svg" @click="userAccess" />
    <navbtn id="CartDiv" title="Shopping Cart" imgsrc="/imgs/Icons/cart.svg" @click="cart" v-if="!admin" />
  </nav>
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

@media (max-width: 1280px) {
  nav {
    text-align: center;
    height: 45px;
    margin: 0px;
    padding: 0px;
  }
}
</style>

