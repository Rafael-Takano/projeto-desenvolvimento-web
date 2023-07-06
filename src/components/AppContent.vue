<script setup>
import { ref, watch } from 'vue'
import Items from './content/ContentItems.vue';
import ExpandItems from './content/ExpandItems.vue';
import AddItems from './content/addItems.vue'
import ConfirmDeletion from './content/ConfirmDeletion.vue';

let products = []
const sortedProducts = ref(Object)
const noProducts = ref(false);
const showCorfirm = ref(false);
const showExpand = ref(false);
const adding = ref(false)
const ExpandProduct = ref(Object);
const productShowing = ref({})
const emit = defineEmits(['addToCart'])
const props = defineProps({
	admin: Boolean,
	category: String,
	categories: Array
})

productShowing.value = products;

fetch('/products')
	.then(
		async res => {
			products = await res.json();
			sortedProducts.value = products.sort((a, b) => {
				return a.name > b.name
			});
			productShowing.value = sortedProducts.value
		})
	.catch(err => console.log(err))


function expand(prod, add) {
	if (add) {
		adding.value = true
	} else {
		adding.value = false
	}
	ExpandProduct.value = prod
	showExpand.value = true
	window.scroll({
		top: 0,
		behavior: 'smooth'
	})
}

function close() {
	if (showExpand.value)
		showExpand.value = false;
}
function addItem(prod) {
	emit('addToCart', prod);

}
function filter() {
	if (props.category == '') {
		productShowing.value = sortedProducts.value;
	}
	else {
		productShowing.value = sortedProducts.value.filter(e => e.Category == props.category);
	}

	if (productShowing.value.length === 0) {
		noProducts.value = true;
	}
	else {
		noProducts.value = false;
	}
}

let deleteItem = {}
function tryDelete(prod) {
	deleteItem = prod
	showCorfirm.value = true;
}

function deleteProd(response) {
	if (response) {
		sortedProducts.value.splice(sortedProducts.value.indexOf(deleteItem), 1)
		productShowing.value.splice(productShowing.value.indexOf(deleteItem), 1)
	}
	else
		deleteItem = {}
	showCorfirm.value = false;
}

function updateItem(newProd) {
	//console.log("Logging from Appcontent UpdateItem", ExpandProduct.value, newProd)
	sortedProducts.value[sortedProducts.value.indexOf(ExpandProduct.value)] = newProd;
	sortedProducts.value.sort((a, b) => {
		return a.name > b.name
	});

	filter()

	showExpand.value = false;
}
function newItem(newProd) {

	console.log(newProd);
	sortedProducts.value.push(newProd)
	sortedProducts.value.sort((a, b) => {
		return a.name > b.name
	});
	filter()
	showExpand.value = false;
}


watch(props, filter)

</script>

<template>
	<section class="container-maior" @click.self="close">
		<section class="product-grid" @click.self="close">
			<section class="grid" @click.self="close">
				<h2 @click="close" v-if="category == ''">All products</h2>
				<h2 @click="close" v-else>{{ category }}</h2>
				<h3 v-if="noProducts && !admin" class="child">There is no products of: {{ category }}</h3>
				<div class="child" @click.self="close">
					<Items v-for="product in productShowing" :product="product" @click.self="close" @ExpandItem="expand"
						@addToCart="addItem" :admin="admin" @delete="tryDelete" />
					<ConfirmDeletion @response="deleteProd" v-if="showCorfirm" />
					<AddItems v-if="admin" @click="expand(undefined, true)" />
				</div>
				<ExpandItems class="child" v-if="showExpand" :product="ExpandProduct" :admin="admin" :categories="categories" @addItem="addItem"
					:add="adding" @updateItem="updateItem" @newItem="newItem" @closeExpand="close" />
			</section>
		</section>
	</section>
</template>

<style scoped>  .child {
  	grid-row-start: 2;
  	grid-column-start: 1;
  }

  .container-maior {
  	color: #999;
  	min-height: calc(100vh - 380px);
  	width: 100%;
  	background-color: #ededed;
  	padding: 4.43vw 0px 0px;
  }

  .grid {
  	display: grid;
  }

  .product-grid {
  	width: 60vw;
  	height: auto;
  	margin: 0 auto;
  	border-top: 0px;
  	border-bottom: 0px;
  	padding: 0.675vw;
  	background-color: #fff;
  	box-sizing: content-box;
  	min-height: calc(100vh - 380px);
  }

  h2 {
  	font-weight: 400;
  	font-size: 30px;
  	margin: 8px;
  }

  h3 {
  	color: #ac2020;
  	font-weight: bold;
  	font-size: 40px;
  	margin: 8px;
  }

  @media (max-width: 1280px) {
  	.container-maior {
  		padding: 45px 0px 0px;
  	}

  	.product-grid {
  		width: calc(100% - 2.5vw);
  		padding: 1.25vw;
  	}
  }
</style>