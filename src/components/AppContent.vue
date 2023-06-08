<script setup>
    import products from './json/products.json'
    import Items from './content/ContentItems.vue';  
</script>

<template>
    <section class="container-maior">
		<section class="product-grid">
			<h2>All products</h2>            
            <Items v-for="product in products.products" :product="product"/>            
        </section>
	</section>
</template>

<style scoped>  


.container-maior {
	color: #999;
	width: 100%;
	background-color: #ededed;
	padding: 4.43vw 0px 0px;
} 

.product-grid {
	display: table;	
	width: 1104.5px;
	height: auto;
	margin: 0 auto; 
	border: 0.5px solid #bbb; 
	border-top: 0px;
	border-bottom: 0px;
	padding: 8px; 
	background-color: #fff;	
  } 
  
h2 {
	font-weight: 400;
	font-size: 30px;
	margin: 8px;
}

@media (max-width: 1280px){
	.container-maior {
		padding: 45px 0px 0px;
	}
	.product-grid {		
		width: 834.5px;	
	}
}


@media (max-width: 900px) {
	.product-grid {
		width: 100%;
		padding: 0px;
	}
}

</style>