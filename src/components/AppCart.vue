<script setup>
import { ref, toRef, watch, onMounted } from 'vue'
import CartItem from './cart/CartItem.vue';
import CartBottom from './cart/CartBottom.vue'

const emit = defineEmits(['removeItem', 'confirmPurchase', 'untoggleCat'])
const props = defineProps({
    items: Array,
    logged: Boolean
})

const items = toRef(props.items)
const subtotal = ref(0)

onMounted(() => {
    update()
})
watch(props, update)

function update() {
    let aux = 0;
    props.items.forEach(e => aux += e.price * e.qtd)
    subtotal.value = aux
}
function remove(item) {
    emit('removeItem', item);
}

function tryPurchase(cardData) {
    if (!props.logged) {
        alert('Please log on your account before finishing the purchase');
        return;
    }
    if (Object.keys(cardData).some(k => cardData[k] == '')) {
        alert('There are missing informations of the card');
        return;
    }
    let data = cardData;
    data.products = JSON.parse(JSON.stringify(items.value))
    if (data.products.length == 0) {
        alert('There is no Products on the shopping cart');
        return;
    }
    console.log(data);
    fetch('/buy', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(async res => {
        console.log(await res.json());
        emit('untoggleCat')
    }).catch(err => console.log(err))
}

</script>

<template>
    <div class="cartDiv">
        <p>Shopping Cart</p>
        <CartItem v-for="(item, index) in items" :item="item" :index="index" @updateSubtotal="update"
            @removeItem="remove" />
    </div>
    <CartBottom :subtotal="subtotal" @confirmPurchase="tryPurchase" />
</template>

<style scoped>
.cartDiv {
    position: fixed;
    z-index: 0;
    right: 0;
    top: 4.43vw;
    background-color: #fff;
    height: calc(100vh - 4.43vw - 12.7vw);
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
        top: 45px;
        border: none;
        height: calc(100% - 45px - 38.3vw);
        width: 100%;
    }
}
</style>