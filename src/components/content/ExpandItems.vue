<script setup>
    import categories from '../json/Categories.json'     
    const props = defineProps({        
        product: {
            type: Object
        },
        admin: {
            type: Boolean
        },        
        add: {
            type: Boolean
        }
    })      
    let newProd;    
    const emit = defineEmits(['addItem','updateItem','newItem', 'closeExpand'])
    function text() {
        return props.product.price.toFixed(2)
    }

    function updateItem () {
        let el = document.getElementById('formEdit');

        newProd = {};
        newProd.name = el[0].value;
        newProd.price = Number(el[1].value);
        newProd.description = el[3].value;
        newProd.QtdStock = Number(el[4].value);
        newProd.QtdSold = props.product.QtdSold
        newProd.Category = el[5].value;
        newProd.Image = props.product.Image
        
        emit('updateItem' ,newProd)
    }

    function newItem() {
        let el = document.getElementById('addItem');
        
        newProd = {};
        newProd.name = el[0].value;
        newProd.price = Number(el[1].value);
        newProd.description = el[3].value;
        newProd.QtdStock = Number(el[4].value);
        newProd.QtdSold = Number(0)
        newProd.Category = el[5].value;
        newProd.Image = "/Products_imgs/Antacid.jpg"        
        
        emit('newItem', newProd)
    }
</script>

<template>    
    <div id="ItemDiv" class="border">        
        <input type="image" src="/imgs/buttons/close page.svg" alt="close" class="close" @click="emit('closeExpand')">
        <form v-if="admin && !add" id="formEdit">
            <input type="Text" class="ItemTitle border" :value="product.name">			
            <div class="itemLeft">
                <label for="ItemImg" class="ItemImgLabel border">
                    <img :src="product.Image" alt="" class="ItemImage"> 				
                </label>
                <input type="text" class="ItemPrice border" :value="product.price">
                <input type="file" id="ItemImg" accept=".png, .jpg">
            </div>
            <div class="itemRight">
                <label for="ItemDesc" class="ItemDescLabel">Description</label>
                <textarea class="ItemDesc border"> {{ product.description }}
                </textarea>
                <label for="ItemQtdStock" class="ItemQtdStockLabel">Qtd in Stock:</label>
                <input type="text" class="ItemQtdStock border" :value="product.QtdStock">
                <p class="QtdSold">Qtd sold: {{ product.QtdSold }}</p>
                <label for="ItemCate" class="ItemCateLabel">Category:</label>
                <select  class="ItemCate border">
                    <option v-for="category in categories" :value="category" :selected="product.Category == category">{{ category }}</option>					
                </select>				
                <input type="image" src="../../imgs/buttons/SaveEdit.png" class="Item" @click.prevent="updateItem">													
            </div>
        </form>
        <form v-else-if="admin && add" id="addItem">
            <input type="Text" class="ItemTitle border">			
            <div class="itemLeft">
                <label for="ItemImg" class="ItemImgLabel border">
                    <p>Add Image</p> 				
                </label>
                <input type="text" class="ItemPrice border">
                <input type="file" id="ItemImg" accept=".png, .jpg">
            </div>
            <div class="itemRight">
                <label for="ItemDesc" class="ItemDescLabel">Description</label>
                <textarea class="ItemDesc border">
                </textarea>
                <label for="ItemQtdStock" class="ItemQtdStockLabel">Qtd in Stock:</label>
                <input type="text" class="ItemQtdStock border">
                <p class="QtdSold">Qtd sold: 0</p>
                <label for="ItemCate" class="ItemCateLabel">Category:</label>
                <select  class="ItemCate border" >
                    <option v-for="category in categories" :value="category">{{ category }}</option>					
                </select>				
                <input type="image" src="../../imgs/buttons/AddProduct.png" class="Item" @click.prevent="newItem">													
            </div>
        </form>
        <div v-else>
            <title type="Text" class="ItemTitle">{{ product.name }}</title>
            <div class="itemLeft">
                <img :src="product.Image" class="ItemImgLabel" v-if="product.QtdStock > 0">                    
                <img :src="product.Image" class="ItemImgLabel out-of-stock" v-else>
                <p class="ItemPrice">R$ {{ text() }}</p>                
            </div>
            <div class="itemRight">
                <label for="ItemDesc" class="ItemDescLabel">Description</label>
                <p class="ItemDesc"> {{ product.description }}
                </p>
                <label for="ItemQtdStock" class="ItemQtdStockLabel">Qtd in Stock: {{ product.QtdStock }}</label>                
                <p class="QtdSold">Qtd sold: {{ product.QtdSold }}</p>
                <label for="ItemCate" class="ItemCateLabel">Category:</label>
                <p class="ItemCate" > {{ product.Category }} </p>				
                <input type="image" src="/public/imgs/buttons/AddtoCart.png" class="Item" @click="emit('addItem',product)" v-if="product.QtdStock > 0">													
                <input type="image" src="/public/imgs/buttons/AddtoCart.png" class="Item out-of-stock" v-else>							
            </div>
        </div>        
	</div>    
</template>

<style scoped>
    * {
        color: #777;  
    }

    .border {
        border: #999 solid 2px;
    }

    #ItemDiv {	  
        font-size: 1vw;      
        width: 59.8vw;
        height: 35vw;
        background-color: rgba(255, 255, 255, 0.8);
        
        border-radius: 2vw;
        backdrop-filter: blur(4px);                
        display: table;        
        box-sizing: content-box;                      
    }

    /*usar vh*/
    .ItemTitle, .ItemTitle::selection{
        width: 55.45vw;
        height: 3.5vw;
        background-color: rgba(0, 0, 0, 0);        		
        display: block;
        outline: none;
        font-size: 2.5vw;
        
        margin: 2vw 2.3vw;
        padding-left: 0.75vw;
        text-overflow: ellipsis;
    }

    .itemLeft {	
        width: 29vw;
        float: left;
        text-align: center;
    }

    .ItemImage {
        width: calc(18vw - 4px);
        height: calc(18vw - 4px);
        border-radius: 2vw;
    }
    .ItemImgLabel {
        display: inline-block;
        width: 18vw;	
        height: 18vw;
        
        border-radius: 2vw;
        margin: 0;	
    }

    .ItemImgLabel p{
        display: inline-block;
        width: 18vw;	
        height: 18vw;
        text-align: center;
        text-transform: uppercase;
        line-height: 18vw;
        		
        font-size: 2.7vw;	
    }

    .ItemPrice, .ItemPrice::selection {
        display: inline-block;
        width: 90%;
        height: 5vw;
        background-color: rgba(0, 0, 0, 0);	
        
        
        text-align: center;
        font-size: 3vw;        
        margin: 1.6vw 5% 0px ;
        outline: none;
    }

    .itemRight {	
        width: 29vw;
        float: right;        	
    }

    .ItemDescLabel {
        font-size: 1.5vw;        
        
    }

    .ItemDesc, .ItemDesc::selection{
        outline: none;
        text-align: left;
        width: 92%;
        height: 12vw;
        background-color: rgba(0, 0, 0, 0);                	
        overflow: scroll;
        margin-bottom: 1vw;        
    }
    

    .ItemQtdStock , .ItemQtdStock::selection {
        display: inline-block;
        outline: none;
        background-color: rgba(0, 0, 0, 0);        
        width: 20%;
        height: 1.2vw;
    } 

    .ItemCate {
        background-color: rgba(0, 0, 0, 0);
        
        height: 1.2vw;
        width: 40%;
        border-radius: .5vw;
        padding: 0 .5vw;
        font-size: inherit;        
        display: inline;
    }

    .Item {	
        height: 4vw;
        margin: 1.75vw auto 0px;
    }

    .Item , .ItemPrice, .ItemDesc{
        display: block;	
    }

    #ItemImg {
	    display: contents;
    }

    .close {            
        float: right;
        position: relative;
        top: -15px;
        right: -15px;        
        width: 40px;
    }

    .out-of-stock {
        filter: grayscale();        
    }

    @media (max-width: 1280px){
        
        * {
            font-size: 3vw;
        }

        #ItemDiv{            
            width: auto;                                
            border-radius: 1vw;					            
            overflow-y:auto;			
        }
        

        .ItemTitle{
            width: 92.726%;	
            margin: 2.5vw 3.85%;
            height: 10vw;
            font-size: 8vw;
        }

        .itemLeft{		
            width: 94%;	
            height: auto;	
            float: none;
            margin: 0 auto;
            text-align: center;
        }

        .ItemImage {
            width: calc(75vw - 4px);
            height: calc(75vw - 4px);
            border-radius: 20px;
        }

        .ItemImgLabel {
        
            display: inline-block;
            width: 75vw;
            height: 75vw;
            border-radius: 20px;
            margin: 4vw auto;
        }

        .ItemImgLabel p  {		
            width: 75vw;
            height: 75vw;
            line-height: 75vw;		
            font-size: 10vw;
        }

        .ItemPrice {
            width: 94%;
            height: 20vw;
            font-size: 16vw;
            margin: auto;
        }

        .itemRight {
            float: none;
            width: 94%;
            height: auto;
            margin: 3vw auto;
        }

        .ItemDescLabel {
            font-size: 6vw;
        }

        .ItemDesc {
            width: 94%;
            margin: 1vw auto 2vw;
            height: 20vh;				
        }

        .ItemQtdStock , .ItemCate {
            width: 60%;
            height: 4vw;
        }

        .Item {
            width: 100%;
            height: auto;
            margin: 3vw auto 0px;
        }

        
 
    }
</style>