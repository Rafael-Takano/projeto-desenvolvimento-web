<script setup>
  const emits = defineEmits(['toggleCategory'])
  function toggleCategory(){
    emits('toggleCategory')
  }
</script>

<template>
  <input type="checkbox" id="menu-check" />
	<label for="menu-check" class="menu-checkbtn">
    <img src="/imgs/Icons/menu.svg" alt="a" @click="toggleCategory">
  </label>
</template>

<style scoped>
  
  img {
    width: 2.24vw;
    height: 2.24vw;
    margin: 1.04vw 1.98vw 0.94vw;
    filter:drop-shadow(0px 0.13vw 0.13vw  rgba(0, 0, 0, 0.25));
  }
  .menu-checkbtn {
    display: block;    
    float: left;    
  }

  input {
    display: contents;
  }

  @media (max-width: 1280px) {
    .menu-checkbtn {
      height: 0;
    }
    img {
      margin: 5px 15px;
      height: 35px;	
      width: 35px;
    }
  }

</style>