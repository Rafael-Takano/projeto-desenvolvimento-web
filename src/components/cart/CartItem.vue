<script setup> 
	const emit = defineEmits(['updateSubtotal','removeItem'])	
	const props = defineProps({
		item: Object,
		index: Number
	})	
	function price() {
        const price = props.item.price*props.item.qtd;
		return price.toFixed(2);
    }		
	function update() {
		if(props.item.qtd > 0)
			emit('updateSubtotal');
		else  {
			emit('removeItem', props.item);
		}
	}

</script>

<template>
    <div class="cartItem">
        <img :src="item.Image" class="item-img">
        <p class="item-title">{{ item.name }}</p>
		<p class="price">R$ {{ price() }}</p>
        <div class="quantity">
            <input type="button" @click="item.qtd--; update();" value="-">
            <p>{{ item.qtd }}</p>
            <input type="button" 
				@click=" if(item.QtdStock > item.qtd)
					{
						item.qtd++; 
						update();
					}" 
				value="+">
        </div>
    </div>
</template>

<style scoped>
.cartItem {
	display: table;	
	width: 100%;
	height: 4.16666vw;
	border: 2px solid #bbb;
	border-radius: 10px;
	background-color: #fff;
	margin: 0.5vw 0 0;	
	padding: .7vw;
}

.item-img{	
	height: 3.05555vw;		
	float: left;
}

.item-title{
	width: 30%;
	height: 3.05555vw;
	font-size: 1.3vw;	
	white-space: nowrap;
	font-weight: 400;
	color: #999;
	float: left;
	margin: 0 .55555vw;
	padding: .694444vw 0;
	text-overflow: ellipsis;
}

.quantity{		
	width: auto;
	height: 2vw;
	border-radius: 15px;
	border: #999 2px solid;
	text-align: center;	
	margin: 0.416666vw 0.5vw;
	float: right;
}

.quantity input, .quantity p{
	background-color: rgba(0, 0, 0, 0);
	color: #999;	
	border: none;
	display: block;
	margin: 0 calc(26.042vw * .01);
	float: left;
}

.quantity input {
	line-height: 2vw;
	font-size: 2vw;
}

.quantity p {
	line-height: 2vw;
	font-size: 1vw;	
}

.price{
	margin: .75vw 0;
	font-size: 1vw;
	float: right;
	color: #999;
}

@media (max-width: 1280px) {

	.cartItem {
		height: 6vw;
		padding: 1.5vw;
	}

	.item-img {
		height: 15vw;
	}
	
	.item-title {
		height: 100%;
		font-size: 5vw;
		margin: 0 2vw;
		padding: 4.465vw 0;
	}

	.quantity {		
		height: 6vw;
		margin: 4.465vw 2vw;
	}

	.quantity input, .quantity p{
		line-height: 6vw;
		font-size: 4.465vw;
		margin: 0 calc(26.042vw * .05)
	}

	.price {
		margin: 4.465vw 0;
		font-size: 5vw;
	}
}

</style>