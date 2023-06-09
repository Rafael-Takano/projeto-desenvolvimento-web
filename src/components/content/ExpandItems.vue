<script setup>
    import categories from '../json/Categories.json'

</script>

<template>
    <div id="ItemDiv">
        <form>
            <input type="Text" class="ItemTitle">			
            <div class="itemLeft">
                <label for="ItemImg" id="ItemImgLabel">
                    <p>Add Image</p> 				
                </label>
                <input type="text" id="ItemPrice">
                <input type="file" id="ItemImg" accept=".png, .jpg">
            </div>
            <div class="itemRight">
                <label for="ItemDesc" id="ItemDescLabel">Description</label>
                <textarea id="ItemDesc">
                </textarea>
                <label for="ItemQtdStock" id="ItemQtdStockLabel">Qtd in Stock:</label>
                <input type="text" id="ItemQtdStock">
                <p id="QtdSold">Qtd sold: 0</p>
                <label for="ItemCate" id="ItemCateLabel">Category:</label>
                <select  id="ItemCate" >
                    <option v-for="category in categories" :value="category">{{ category }}</option>					
                </select>				
                <input type="image" src="../../imgs/buttons/Add Product.png" id="Item">													
            </div>
        </form>
	</div>
</template>

<style scoped>
    * {
        color: #777;  
    }

    #ItemDiv {	  
        font-size: 1vw;      
        width: 59.8vw;
        height: 35vw;
        background-color: rgba(255, 255, 255, 0.8);
        border: #999 solid 2px;
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
        border: #999 2px solid;			
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

    #ItemImgLabel {
        display: inline-block;
        width: 18vw;	
        height: 18vw;
        border: #999 solid 2px;
        border-radius: 2vw;
        margin: 0;	
    }

    #ItemImgLabel p{
        display: inline-block;
        width: 18vw;	
        height: 18vw;
        text-align: center;
        text-transform: uppercase;
        line-height: 18vw;
        		
        font-size: 2.7vw;	
    }

    #ItemPrice, #ItemPrice::selection {
        display: inline-block;
        width: 90%;
        height: 5vw;
        background-color: rgba(0, 0, 0, 0);	
        border: #999 solid 2px;
        
        text-align: center;
        font-size: 3vw;        
        margin: 1.6vw 5% 0px ;
        outline: none;
    }

    .itemRight {	
        width: 29vw;
        float: right;        	
    }

    #ItemDescLabel {
        font-size: 1.5vw;        
        
    }

    #ItemDesc, #ItemDesc::selection{
        outline: none;
        text-align: left;
        width: 92%;
        height: 12vw;
        background-color: rgba(0, 0, 0, 0);        
        border: #999 2px solid;	
        overflow: scroll;
        margin-bottom: 1vw;        
    }
    

    #ItemQtdStock , #ItemQtdStock::selection {
        display: inline-block;
        outline: none;
        background-color: rgba(0, 0, 0, 0);
        border: #999 2px solid;
        width: 20%;
        height: 1.2vw;
    } 

    #ItemCate {
        background-color: rgba(0, 0, 0, 0);
        border: #999 solid 2px;
        height: 1.2vw;
        width: 40%;
        border-radius: .5vw;
        padding-left: .5vw;
        font-size: inherit;        
    }

    #Item {	
        height: 4vw;
        margin: 1.75vw auto 0px;
    }

    #Item , #ItemPrice, #ItemDesc{
        display: block;	
    }

    input {
	    display: contents;
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
            margin: 2.5vw auto;
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

        #ItemImgLabel {
        
            display: inline-block;
            width: 75vw;
            height: 75vw;
            border-radius: 20px;
            margin: 4vw auto;
        }

        #ItemImgLabel p  {		
            width: 75vw;
            height: 75vw;
            line-height: 75vw;		
            font-size: 10vw;
        }

        #ItemPrice {
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

        #ItemDescLabel {
            font-size: 6vw;
        }

        #ItemDesc {
            width: 94%;
            margin: 1vw auto 2vw;
            height: 20vh;				
        }

        #ItemQtdStock , #ItemCate {
            width: 60%;
            height: 4vw;
        }

        #Item {
            width: 100%;
            height: auto;
            margin: 3vw auto 0px;
        }
    }

</style>