<script>
export default {
    emits: ['logout','delete','edit'],
    methods: {
        logout() {
            this.$emit('logout');
        }
    }
}
</script>

<template>
    <div class="clientAccess">
		<div class="button" @click="$emit('edit')">Edit Account</div>
        <div class="button" @click="$emit('delete')">Delete Account</div>
        <div class="button" @click="logout" >Log off</div>
    </div>  
</template>

<style scoped>


.button {
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

	.button {
		margin: 2vw 0;
		line-height: 15vw;
		font-size: 8vw;
	}
}

</style>