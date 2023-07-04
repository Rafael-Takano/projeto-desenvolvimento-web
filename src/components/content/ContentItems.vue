<script setup>
    const prop = defineProps({
        product: Object,
        admin: Boolean
    });    
    const emit = defineEmits(['ExpandItem','addToCart', 'delete'])
    function text() {
        let string = prop.product.price
        return string.toFixed(2)
    }
    function Expand() {
        emit('ExpandItem', prop.product)
    }
    function addItem() {
        emit('addToCart', prop.product, prop.admin)
    }
    function deleteItem() {        
        emit('delete', prop.product)            
    }

</script>

<template>
    <div class="item">
        <img :src="product.Image" v-if="product.QtdStock > 0" class="item-img">        
        <img :src="product.Image" v-else class="item-img out-of-stock">
        
        <h3 class="item-title">{{ product.name }}</h3>
        <div class="itemButtons">
            <input type="image" src="/imgs/buttons/Info.svg" class="leftButton roundBtn" @click="Expand" v-if="!admin">
            <input type="image" src="/imgs/buttons/Edit.svg" class="leftButton roundBtn" @click="Expand" v-else>
            <input type="image" src="/imgs/buttons/RemoveItem.svg" class="rightButton roundBtn" @click="deleteItem" v-if="admin">            
            <input type="image" src="/imgs/buttons/AddtoCart.svg" class="rightButton roundBtn" @click="addItem" v-else-if="product.QtdStock > 0">    
            <input type="image" src="/imgs/buttons/AddtoCart.svg" class="rightButton roundBtn out-of-stock" v-else>        
        </div>
        <p class="price">R$ {{ text() }}</p>        
	</div>
</template>


<style scoped>
    .item {
        width: 13.5vw;
        height: 18.5vw;
        border: 0.1vw solid #bbb;
        border-radius: 0.5vw;
        background-color: #fff;
        margin: 0.672vw;
        float:left;
        box-sizing: content-box;	
    }

    .item-img {
        width: 8.5vw;
        height: 8.5vw;	
        margin: 0.5vw 2.5vw;
    }

    .item-title {
        margin: 0px 0.4vw;
        font-size: 1vw;
        font-weight: 400;
    }

    .roundBtn {
        display: inline-block;
        width: 4.1vw;
        height: 4.1vw;    
        margin: 0.3vw 1.325vw;    
    }

    .leftButton {
        float: left;
    }

    .rightButton {
        float: right;
    }

    .out-of-stock {
        filter: grayscale();        
    }

    .price {
        display: inline-block;
        width: 13.5vw;
        text-align: center;
        font-size: 2vw;
    }

    @media (max-width: 1280px) {
        .item {		    
		    width: 30vw;
		    height: 41.5vw;
		    border: 2px solid #bbb;
	    	border-radius: 2vw;
    		margin: 1.25vw;		
            box-sizing: border-box;
        }

        .item-img {
            width: 18.88vw;
            height: 18.88vw;
            margin: 1.11vw 5.55vw;	
        }	

        .item-title {
            margin: 0vw 0.88888vw;
            font-size: 2.222222vw;
            font-weight: 400;
        }

        .roundBtn {
            width: 9.11111vw;
            height: 9.11111vw;
            margin: 0.66666vw 2.7vw;
        }
       

        .price {            
            width: 29.9vw;            
            font-size: 4.4444vw;
        }        
    }
</style>