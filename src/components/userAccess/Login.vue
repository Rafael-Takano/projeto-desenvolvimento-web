<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
	emits: ['login'],
    methods: {
        login(loginType) {
            this.$emit('login', loginType, this.email, this.password);
        }
    }
}
</script>

<template>
    <div class="Login">
        <img src="/imgs/Icons/person.svg">
        <input type="text" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div class="login-button" @click="login('client')">Client Login</div>
        <div class="login-button" @click="login('admin')">Admin Login</div>
    </div>  
</template>

<style scoped>

img {	
	width: 40%;
	margin: 10% 30% ;
	background-color: #fff;	    
}

input {
	display: block;
	width: 100%;	
	border: 1px #999 solid;	
	border-radius: 8px;
	margin: .3vw 0;
	padding: 10px;
}

.login-button {
	text-align: center;	
	line-height: 4.16666vw;
	width: 100%;
	height: auto;
	border-radius: 8px;
	border: 2px solid #720000;
	text-transform: uppercase;
	background-color: #c92828;
	font-size: 2vw;
	color: #fff;
	font-weight: bold;
	margin: .3vw 0;
	-webkit-text-stroke: #720000 1.5px;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	cursor: pointer;
}

@media (max-width: 1280px) {
    input {
		margin: 1vw 0;
	}

	.login-button {
		margin: 2vw 0;
		line-height: 15vw;
		font-size: 8vw;
	}
}

</style>