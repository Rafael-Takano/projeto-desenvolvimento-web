<template>
    <div class="cart-bottom-div">
        <p class="subtotal">Subtotal: R$ 49,90</p><br>
        <p class="payment-text">Credit card or Debit card:</p>
        <input type="text" name="CardNumber" id="cardNumber">
        <div class="confirm-purchase">Confirm Purchase</div>
    </div>
</template>

<style scoped>
.cart-bottom-div {
	position: fixed;
	right: 0;
	bottom: 0px;
	height: 12.7vw;
	width: 26.0416vw;
    padding: 1.04166vw 0;
    background-color: #fff;    
    border: 1px #999 solid
}
.subtotal{
    float: right;
    margin-right: .78125vw;
}
.payment-text {
    float: left;
    margin-left: .78125vw;
}

.subtotal, .payment-text{
	font-size: .9375vw;
	margin-bottom: .78125vw;
    color: #999;
}

#cardNumber, #cardNumber::selection {
	line-height: normal;
	outline: none;
	text-align: left;
	width: 24.48vw;
	margin: 0 .78125vw;
    font-size: 1.6vw;
	height: 2vw;
	background-color: rgba(0, 0, 0, 0);
	color: #999;
	border: #999 2px solid;		
	margin-bottom: .9375vw;
	cursor: pointer;
}
.confirm-purchase {
	text-align: center;
	vertical-align: middle;
	line-height: 4.16666vw;
	width: 24.48vw;
	height: 4.16666vw;
	border-radius: 8px;
	border: 2px solid #720000;
	margin: 0 .78125vw;
	text-transform: uppercase;
	background-color: #c92828;
	font-size: 2vw;
	color: #fff;
	font-weight: bold;
	-webkit-text-stroke: #720000 1.5px;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	cursor: pointer;
}

@media (max-width: 1280px) {
    .cart-bottom-div{
        position: static;
        width: 100%;
        height: auto;
        border: none;
    }

    .subtotal {
        font-size: 4vw;
        float: none;
        text-align: right;
    }
    .payment-text{
        font-size: 3vw;
        float: none;
    }

    #cardNumber {
        width: 100%;
        margin: 0;
        height: 7vw;
        font-size: 7vw;
    }
    .confirm-purchase {
        line-height: 15vw;
        width: 100%;
        margin: 2vw 0 0;
        height: 15vw;
        font-size: 8vw;        
    }
}
</style>