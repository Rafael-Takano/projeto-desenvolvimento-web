<script>
export default {
    data() {
        return {
            name: this.$props.user.name,
            email: this.$props.user.email,
            password: this.$props.user.password,
            number: this.$props.user.phone,
            address: this.$props.user.address
        };
    },
    emits: ['finishEdit'],
    props: ['user', 'admin'],
    methods: {
        enterCreateCustomer() {
            let usr = {
                _id: this.$props.user._id,
                name: this.name,
                email: this.email,
                password: this.password,
                phone: this.number,
                address: this.address
            }
            if (Object.keys(usr).some(k => usr[k] == '')) {
                alert('There are empty parameters')
                return;
            }
            console.log(usr);
            this.$emit('finishEdit');
            if (this.$props.admin) {
                fetch('/admins', {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(usr)
                }).then(async res => console.log(await res.json()))
            }
            else {
                fetch('/users', {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(usr)
                }).then(async res => console.log(await res.json()))
            }
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
        <div class="button" @click="enterCreateCustomer">Edit Account</div>
    </div>
</template>

<style scoped>
img {
    width: 40%;
    margin: 10% 30%;
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