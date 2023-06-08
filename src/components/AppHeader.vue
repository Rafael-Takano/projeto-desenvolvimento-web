<script setup>
  import Categories from './header/HeaderCategory.vue';
  import Logo from './header/HeaderLogo.vue';
  import navbtn from './header/HeaderButtons.vue'
  //imgsrc="./imgs/Icons/cart.svg"
</script>

<template>
  <nav>
		<Categories />
		<Logo />
		<navbtn id="userAccessDiv" title="User Access" imgsrc="/imgs/Icons/person.svg"/>			
    <navbtn id="CartDiv" title="ShoppingCart" imgsrc="/imgs/Icons/cart.svg" />
    
	</nav>
</template>

<style scoped>
  nav {	
    background: #fff;
    height: 85px;
    width: 100%;
    box-shadow: 0px 2.5px 2.5px rgba(0, 0, 0, 0.25);
    position: fixed;
    display: table;
  }


  @media (max-width: 900px) {
    nav {
      display: inline-block;
      text-align: center;
    }
  }
</style>
