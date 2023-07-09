<script setup>
const props = defineProps({
    subtotal: Number
});
let creditCard = {
    owner: '',
    cardNumber: '',
    CVV: '',
    monthExp: '',
    yearExp: ''
}

const emit = defineEmits(['confirmPurchase'])

function price() {
    return props.subtotal.toFixed(2);
}	
</script>

<template>
    <div class="cart-bottom-div">
        <p class="subtotal">Subtotal: R$ {{ price() }}</p><br>
        <p class="payment-text">Owner:</p>
        <input type="text" name="CardNumber" id="cardNumber" class="Owner" v-model="creditCard.owner">
        <p class="payment-text">Credit card Number:</p>
        <input type="text" name="CardNumber" id="cardNumber" class="Owner" v-model="creditCard.cardNumber">
        <div class="inl-blk">
            <p class="payment-text" style="display: block;">CVV: </p> <br>
            <input type="text" name="CardNumber" id="cardNumber" class="CVV" v-model="creditCard.CVV">
        </div>
        <div class="inl-blk" style="float: right;">
            <p class="payment-text" style="width: 10vw; display: block;">ExpirationDate: </p> <br>
            <input type="text" name="CardNumber" id="cardNumber" class="CVV" style="float: right;" v-model="creditCard.yearExp">
            <select name="Month" id="cardNumber" class="CVV" style="float: right;" v-model="creditCard.monthExp">
                <option v-for="mes in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" :value="mes">{{ mes }}</option>
            </select>
        </div>
        <div class="confirm-purchase" @click="emit('confirmPurchase', creditCard)">Confirm Purchase</div>
    </div>
</template>

<style scoped>
.cart-bottom-div {
    position: fixed;
    right: 0;
    bottom: 0px;
    height: 15.7vw;
    width: 26.0416vw;
    padding: 0.4166vw 0;
    background-color: #fff;
    border: 1px #999 solid
}

.subtotal {
    float: right;
    margin-right: .78125vw;
}

.payment-text {
    float: left;
    margin-left: .78125vw;
}

.subtotal,
.payment-text {
    font-size: .7375vw;
    margin-bottom: .3vw;
    color: #999;
}

#cardNumber,
#cardNumber::selection {
    line-height: normal;
    outline: none;
    text-align: left;
    font-size: .7375vw;
    height: 1.3vw;
    background-color: rgba(0, 0, 0, 0);
    color: #999;
    border: #999 2px solid;
    margin-bottom: .2375vw;
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

.inl-blk {
    display: inline-block;
    margin-right: .78125vw;

}

.Owner {
    margin: 0 .78125vw;
    width: 24.48vw;
}

.CVV {
    margin: 0 0 0 .78125vw;
    display: block;
    width: 5vw;
}

br {
    height: 0;
}

@media (max-width: 1280px) {
    .cart-bottom-div {
        width: 100%;
        height: 48.3vw;
        border: none;
        border-top: 1px #999 solid;
        padding: 1vw;
    }

    .subtotal {
        font-size: 3vw;
        float: none;
        text-align: right;
    }

    .payment-text {
        font-size: 2.5vw;
        float: none;
    }

    #cardNumber {

        margin: 0;
        height: 4vw;
        font-size: 3vw;
    }

    .confirm-purchase {
        line-height: 15vw;
        width: 100%;
        margin: 2vw 0 0;
        height: 15vw;
        font-size: 8vw;
    }

    .Owner {
        width: 100%;
        margin: 0 .78125vw;
    }

    .CVV {
        margin: 0 0 0 .78125vw;
        display: block;
        width: 30vw;
    }
}</style>