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
    width: 319px;
    height: 58px;
    border-radius: 26px;
    border: 2px solid #720000;
    margin: 11.5px 30px 11.5px 0px;
    text-transform: uppercase;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    -webkit-text-stroke: #720000 1.5px;
    display: table;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  .navbtn p {
    float: left;
    margin: 12px 0px 12px 26px; 
    line-height: 34px;
    letter-spacing: 1.5px;
  }

  .navbtn img {
    float: right;
    margin: 8px 26px 8px 0px;
    height: 42px;
  }

  @media (max-width: 1150px){
    .navbtn {
      float: right;		
      width: fit-content;
      height: 42px;
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
      margin: 8px 26px 8px 26px;
      height: 42px;
      filter: drop-shadow(0px 2.5px 2.5px  rgba(0, 0, 0, 0.25));
    }
  }

  @media (max-width: 900px){
    .navbtn img {
      float: right;
      margin: 8px 4px 8px 4px;
      height: 42px;		
    }
  }

</style>