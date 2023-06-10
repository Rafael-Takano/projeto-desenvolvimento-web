<script setup>
	import { ref } from 'vue'
    import products from './json/products.json'
    import Items from './content/ContentItems.vue';  
	import ExpandItems from './content/ExpandItems.vue';

	const isAdmin = ref(false)
	const show = ref(false);
	const ExpandProduct	= ref(Object);
	function expand (prod) {	
		ExpandProduct.value = prod
		show.value = true					
		window.scrollTo(0,0)
	}
	function close () {
		if(show.value)
			show.value = false;
	}
</script>

<template>
    <section class="container-maior" @click.self="close">
		<section class="product-grid" @click.self="close">
			<h2 @click="close">All products</h2>      
			<ExpandItems class="child" v-if="show" :product="ExpandProduct" :admin="isAdmin"/>
			<div class="child" @click.self="close">
				<Items v-for="product in products.products" :product="product" @click.self="close" @ExpandItem="expand"/>            			
			</div>
        </section>
	</section>
</template>

<style scoped>  

.child {
	grid-row-start: 2;
    grid-column-start: 1;
}

.container-maior {
	color: #999;
	width: 100%;
	background-color: #ededed;
	padding: 4.43vw 0px 0px;
} 

.product-grid {
	display: grid;	
	width: 60vw;
	height: auto;
	margin: 0 auto; 	
	border-top: 0px;
	border-bottom: 0px;
	padding: 0.675vw; 
	background-color: #fff;	
	box-sizing: content-box;
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
		width: calc(100% - 2.5vw);
		padding: 1.25vw;
	}
}

</style>