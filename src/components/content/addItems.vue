<template>
    <div class="addCart">
        <img src="/imgs/buttons/Add Item.svg" class="addProductimg">								
        <p class="addCartP">Add Product</p>
    </div>
</template>

<style scoped>
    .addCart {
        width: 13.5vw;
        height: 18.5vw;
        border: 0.1vw solid #bbb;
        border-radius: 0.5vw;
        background-color: #fff;
        margin: 0.672vw;
        float:left;
        box-sizing: content-box;	
    }
    img {
        width: 50%;
        margin: 40% 25% 0;
    }

    p {
        width: 100%;
        text-align: center;        
        font-size: 1.25vw;
    }

    @media (max-width: 1280px) {
        .addCart {		    
		    width: 30vw;
		    height: 41.5vw;
		    border: 2px solid #bbb;
	    	border-radius: 2vw;
    		margin: 1.25vw;		
            box-sizing: border-box;
        }

        p {
            font-size: 3vw;
        }
    }
</style>