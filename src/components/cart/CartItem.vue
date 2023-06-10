<template>
    <div class="cartItem">
        <img src="/imgs/image 1.png" class="item-img">
        <p class="item-title">Feijão 500g</p>
		<p class="price">R$ 4,99</p>
        <div class="quantity">
            <input type="button" value="-">
            <p>0</p>
            <input type="button" value="+">
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
	width: 5vw;
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
	font-size: 1.5vw;
	border: none;
	display: inline-block;
	margin: 0 calc(26.042vw * .01);
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
		width: 20vw;
		height: 6vw;
		margin: 4.465vw 2vw;
	}

	.quantity input, .quantity p{
		font-size: 4.465vw;
		margin: 0 calc(26.042vw * .05)
	}

	.price {
		margin: 4.465vw 0;
		font-size: 5vw;
	}
}

</style>