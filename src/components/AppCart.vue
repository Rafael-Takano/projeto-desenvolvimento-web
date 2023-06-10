<script setup>
    import CartItem from './cart/CartItem.vue';
    import CartBottom from './cart/CartBottom.vue'
</script>

<template>
    <div class="cartDiv">
        <p>Shopping Cart</p>            
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />                    
        <CartBottom />        
    </div>
</template>

<style scoped>

.cartDiv {
	position: fixed;
	z-index: 0;
	right: 0;
	bottom: 0;
	background-color: #fff;
	height: calc(100vh - 4.43vw);
	width: 26.042vw;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.25);	
    border-left: 1px #999 solid;
    padding: 1vw;
    overflow: scroll;
}

.cartDiv p {		
	font-size: 3vh;
	color: #999;
}

@media (max-width: 1280px) {
    .cartDiv {
        border: none;
        height: calc(100% - 45px);
        width: 100%;
    }    
}

</style>