<script setup>
import { ref, watch } from 'vue'
import Items from './content/ContentItems.vue';
import ExpandItems from './content/ExpandItems.vue';
import AddItems from './content/addItems.vue'
import ConfirmDeletion from './content/ConfirmDeletion.vue';

const noProducts = ref(false);
const showCorfirm = ref(false);
const showExpand = ref(false);
const adding = ref(false)
const ExpandProduct = ref(Object);
const productShowing = ref({})
const searchValue = ref('');
const emit = defineEmits(['addToCart', 'untoggleCat'])
const props = defineProps({
	admin: Boolean,
	category: String,
	categories: Array,
	toggleCat: Number
})

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

let searching = false
async function filter() {
	searching = false;
	await reload();

	emit('untoggleCat');

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
		fetch('/products', {
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(deleteItem),
		})
			.catch(err => {
				console.log(err);
			})
		reload();
	}
	else
		deleteItem = {}
	showCorfirm.value = false;
}

function search() {
	if (searchValue.value == '') {
		alert('Empty search isn\'t allowed');
		return;
	}
	searching = true;
	fetch(`/search/${searchValue.value}`, {
		method: 'GET'
	}).then(async res => {
		productShowing.value = await res.json();		
	})
}

function reload() {
	if (searching) {
		fetch(`/search/${searchValue.value}`, {
			method: 'GET'
		}).then(async res => {
			productShowing.value = await res.json();
		}).catch(err => console.log(err))
	}
	else if (props.category == '') {
		fetch('/products'
		).then(
			async res => {
				productShowing.value = await res.json();				
			}
		).catch(err => console.log(err))
	}
	else {
		fetch(`/categories/${props.category}`
		).then(
			async res => {
				productShowing.value = await res.json();
			}
		).catch(err => console.log(err))
	}
}

reload()

watch(props, filter)

</script>

<template>
	<section class="container-maior" @click.self="close">
		<form>
			<input type="text" name="searchBar" id="searchT" class="search" v-model="searchValue">
			<input type="button" value="Search" id="searchB" class="search" @click="search">
		</form>
		<section class="product-grid" @click.self="close">
			<section class="grid" @click.self="close">
				<h2 v-if="searching"> Results of {{ searchValue }}:</h2>
				<h2 @click="close" v-else-if="category == ''">All products</h2>
				<h2 @click="close" v-else>{{ category }}</h2>
				<h3 v-if="noProducts && !admin" class="child">There is no products of: {{ category }}</h3>
				<div class="child" @click.self="close">
					<Items v-for="product in productShowing" :product="product" @click.self="close" @ExpandItem="expand"
						@addToCart="addItem" :admin="admin" @delete="tryDelete" />
					<ConfirmDeletion @response="deleteProd" v-if="showCorfirm" />
					<AddItems v-if="admin" @click="expand(undefined, true)" />
				</div>
				<ExpandItems class="child" v-if="showExpand" :product="ExpandProduct" :admin="admin"
					:categories="categories" @addItem="addItem" :add="adding" @updateItem="reload(); close()"
					@newItem="reload(); close()" @closeExpand="close" />
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
  	padding-top: calc(0.675vw + 30px);
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

  .search {
  	padding-left: 1vw;
  	position: fixed;
  	top: 4.75vw;
  	height: 30px;
  	font-size: 12;
  	border: 2px solid #ac2020;
  	color: #ac2020;
  }

  #searchT,
  #searchT::selection {
  	width: 49vw;
  	border-top-left-radius: 10px;
  	border-bottom-left-radius: 10px;
  	margin: 0;
  	left: 20vw;
  	outline: none;
  }

  #searchB {
  	font-weight: bold;
  	width: 11vw;
  	right: 20vw;
  	border-radius: 0px;
  	border-top-right-radius: 10px;
  	border-bottom-right-radius: 10px;
  	text-transform: uppercase;
  }


  @media (max-width: 1280px) {
  	.container-maior {
  		padding: 45px 0px 0px;
  	}

  	.product-grid {
  		width: calc(100% - 2.5vw);
  		padding: 1.25vw;
  		padding-top: 45px;
  	}

  	.search {
  		top: 50px;
  	}

  	#searchT {
  		left: 2vw;
  		width: 76vw;
  	}

  	#searchB {
  		right: 2vw;
  		width: 20vw
  	}
  }
</style>