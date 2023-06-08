<template>
    <input type="checkbox" id="menu-check" />
	<label for="menu-check" class="menu-checkbtn">
    <img src="/imgs/Icons/menu.svg" alt="a">
    </label>
</template>

<style scoped>
  
  img {
    width: 43px;
    height: 43px;
    margin: 20px 38px 18px;
    filter:drop-shadow(0px 2.5px 2.5px  rgba(0, 0, 0, 0.25));
  }
  .menu-checkbtn {
    float: left;
    display: block;
  }

  input {
    display: contents;
  }

  @media (max-width: 900px) {
    .menu-checkbtn img {
      position: fixed;		
    }

  }

</style>