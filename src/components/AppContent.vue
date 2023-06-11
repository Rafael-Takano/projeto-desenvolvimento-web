<script setup>
	import { ref, watch } from 'vue'
    import products from './json/products.json'
    import Items from './content/ContentItems.vue';  
	import ExpandItems from './content/ExpandItems.vue';
	import AddItems from './content/addItems.vue'

	const sortedProducts = products.products.sort((a,b)=> {
		return a.name>b.name
	});

	let productShowing = sortedProducts;

	const emit = defineEmits(['addToCart'])
	const props = defineProps({
		admin: Boolean,
		category: String
	})
	
	const show = ref(false);
	const adding = ref(false)
	const ExpandProduct	= ref(Object);
	function expand (prod, add) {	
		if (add) {
			adding.value = true
		} else {
			adding.value = false
		}
		ExpandProduct.value = prod
		show.value = true					
		window.scrollTo(0,0)
	}
	function close () {
		if(show.value)
			show.value = false;
	}
	function addItem (prod){
		emit('addToCart', prod);

	}
	function filter() {
		if(props.category == '') {
			productShowing = sortedProducts;
		} else {
			console.log(props.category, sortedProducts);
			productShowing = sortedProducts.filter(e => e.Category == props.category);
		}		
	}

	watch(props, filter) 

</script>

<template>
    <section class="container-maior" @click.self="close">
		<section class="product-grid" @click.self="close">
			<h2 @click="close">All products</h2>      
			<ExpandItems class="child" v-if="show" :product="ExpandProduct" :admin="admin" @addItem="addItem" :add="adding"/>
			<div class="child" @click.self="close">
				<Items v-for="product in productShowing" :product="product" @click.self="close" @ExpandItem="expand" @addToCart="addItem" :admin="admin"/> 
				<AddItems v-if="admin" @click="expand(undefined,true)"/>           			
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