<script>    
import Login from "./userAccess/Login.vue"
import ClientAccess from "./userAccess/ClientAccess.vue"
import AdminAccess from "./userAccess/AdminAccess.vue"
import CreateCustomer from "./userAccess/CreateCustomer.vue"
import CreateAdmin from "./userAccess/CreateAdmin.vue"

export default {
    data() {
        return {
            email: '',
            password: '',
            showCreateCustomer: false,
            showCreateAdmin: false
        };
    },
    components: {
        Login,
        ClientAccess,
        AdminAccess,
        CreateCustomer,
        CreateAdmin
    },
    props: {
        userLoggedIn: {
            type: Boolean,
            required: true
        },
        admin: {
            type: Boolean
        }
    },
    emits: ['login', 'logout', 'createCustomer', 'createAdmin'],
    methods: {
        login(loginType, email, password) {
            this.$emit('login', loginType, email, password);
        },
        logout(){
            this.$emit('logout');
        },
        createCustomer(){
            this.showCreateCustomer = true;
        },
        createAdmin(){
            this.showCreateAdmin = true;
        },
        enterCreateCustomer(){
            this.showCreateCustomer = false;
        },
        enterCreateAdmin(){
            this.showCreateAdmin = false;
        },

    }
}
</script>

<template>
    <Login v-if="!userLoggedIn" @login="login"/>
    <ClientAccess v-if="userLoggedIn && !admin && !showCreateCustomer && !showCreateAdmin" @logout="logout"/>
    <AdminAccess v-if="userLoggedIn && admin && !showCreateCustomer && !showCreateAdmin" @logout="logout"  @createCustomer="createCustomer" @createAdmin="createAdmin"/>
    <CreateCustomer v-if="showCreateCustomer" @enterCreateCustomer="enterCreateCustomer"/>
    <CreateAdmin v-if="showCreateAdmin" @enterCreateAdmin="enterCreateAdmin"/>
</template>

<style scoped>

</style>