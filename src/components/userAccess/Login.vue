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

.login-button {
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
    .cartDiv {
        top: 45px;
        border: none;
        height: calc(100% - 45px - 38.3vw);
        width: 100%;
    }    
}

</style>