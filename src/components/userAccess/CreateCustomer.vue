<script>
export default {
    data() {
        return {
			name: '',
            email: '',
            password: '',
			number: '',
			address: ''
        };
    },
	emits: ['enterCreateCustomer'],
    methods: {
        enterCreateCustomer() {
            this.$emit('enterCreateCustomer');
        }
    }
}
</script>

<template>
    <div class="Login">
        <img src="/imgs/Icons/person.svg">
        <input type="text" placeholder="Name" v-model="name">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <input type="text" placeholder="Number" v-model="number">
        <input type="text" placeholder="Address" v-model="address">
        <div class="button" @click="enterCreateCustomer" >Create Customer</div>
    </div>  
</template>

<style scoped>

.Login {
	position: fixed;
	z-index: 0;
	right: 0;   
	top: 4.43vw;
	background-color: #fff;
	height: calc(100vh - 4.43vw);
	width: 26.042vw;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.25);	
    border-left: 1px #999 solid;
    padding: 1vw;
    overflow: scroll;

	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}

.Login p {		
	font-size: 3vh;
	color: #999;
}

.Login img {	
	position: center;
	padding: 10vh 0 5vh 0;
	background-color: #fff;
	max-width: 80%;
    height: auto;
}

.button {
	text-align: center;
	vertical-align: middle;
	line-height: 4.16666vw;
	width: 90%;
	height: 4.16666vw;
	border-radius: 8px;
	border: 2px solid #720000;
	margin: 2vh .78125vw 0 .78125vw;
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
    .cartDiv {
        top: 45px;
        border: none;
        height: calc(100% - 45px - 38.3vw);
        width: 100%;
    }    
}

</style>