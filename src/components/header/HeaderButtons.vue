<script setup>    
    
    defineProps({
        title: {
            type: String,
            required: true
        },     
        imgsrc: {
            type: String
        }, 
    });

</script>

<template>
    <div id="CartDiv" class="navbtn">
		 	<p>{{ title }}</p>
			<img :src="imgsrc">
		</div>
</template>

<style scoped>

  .navbtn {
    float: right;
    width: 16.62vw;
    height: 3.02vw;
    border-radius: 1.35vw;
    border: 2px solid #720000;
    margin: 0.598vw 0.73vw;
    text-transform: uppercase;
    color: #fff;
    font-size: 1.04vw;
    font-weight: bold;
    -webkit-text-stroke: #720000 0.068vw;
    display: table;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  .navbtn p {
    float: left;
    margin: 0.625vw 0.625vw ; 
    line-height: 1.77vw;
    letter-spacing: 0.08vw;
  }

  .navbtn img {
    float: right;
    margin: 0.625vw 1.05vw;
    height: 1.77vw;
  }

  @media (max-width: 1280px){
    .navbtn {
      float: right;		
      width: fit-content;
      height: 0px;
      margin: 0;
      border-radius: 0;
      border: none;						
      display: table;
      box-shadow: none;
    }
    
    .navbtn p {
      display: none;
    }
    
    .navbtn img {
      float: right;
      margin: 5px 14px;
      height: 35px;		
    }
  }  

</style>