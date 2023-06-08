<script setup>
    defineProps({
        product: {
            type: Object,
        }
    });
</script>

<template>
    <div class="item">
        <img src="/imgs/image 1.png" class="item-img">
        <h3 class="item-title">{{ product.name }}</h3>
        <input type="image" src="/imgs/buttons/Info.svg" class="Infoimg roundBtn">
        <input type="image" src="/imgs/buttons/Add to Cart.svg" class="AddCartimg roundBtn">
            
        <p class="price">R$ 4,99</p>
	</div>
</template>

<style scoped>
    .item {
        width: 240px;
        height: 370px;
        border: 2px solid #bbb;
        border-radius: 10px;
        background-color: #fff;
        margin: 15px;
        float:left
    }

    img.item-img {
        width: 170px;
        height: 170px;	
        margin: 10px 35px;
    }

    h3.item-title {
        margin-left: 8px;
        font-size: 20px;
        font-weight: 400;
    }

    .roundBtn {
        display: inline-block;
        width: 82px;
        height: 82px;
        margin: 8px 8px 0px 8px;
    }

    .AddCartimg {
        margin-left: 40px;
    }

    .price {
        display: inline-block;
        width: 240px;
        text-align: center;
        font-size: 40px;
    }

    @media (max-width: 900px) {
        .item {
		    --px: calc(100vw/108);
		    width: 44.43vw;
		    height: 66.66vw;
		    border: 2px solid #bbb;
	    	border-radius: 2vw;
    		margin: 2.5vw;		
        }

        img.item-img {
            width: 31.47vw;
            height: 31.47vw;
            margin: 1.85vw 6.48vw;	
        }	

        h3.item-title {
            margin-left: 1.48vw;
            font-size: 3.70vw;
            font-weight: 400;
        }

        .roundBtn {
            width: 15.18vw;
            height: 15.18vw;
            margin: 1.48vw 1.48vw 0px 1.48vw;
        }

        .AddCartimg {
            margin-left: 7.61vw;
        }

        .price {
            display: inline-block;
            width: 44.43vw;
            text-align: center;
            font-size: 7.405vw;
        }
        
    }
</style>