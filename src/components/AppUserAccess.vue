<script>
import Login from "./userAccess/Login.vue"
import ClientAccess from "./userAccess/ClientAccess.vue"
import AdminAccess from "./userAccess/AdminAccess.vue"
import CreateCustomer from "./userAccess/CreateCustomer.vue"
import CreateAdmin from "./userAccess/CreateAdmin.vue"
import ManageUsers from "./userAccess/ManageUsers.vue"
import EditingSelf from "./userAccess/EditingSelf.vue"

export default {
    data() {
        return {
            email: '',
            password: '',
            showCreateCustomer: false,
            showCreateAdmin: false,
            managingUsers: false,
            editing: false
        };
    },
    components: {
        Login,
        ClientAccess,
        AdminAccess,
        CreateCustomer,
        CreateAdmin,
        ManageUsers,
        EditingSelf
    },
    props: {
        userLoggedIn: {
            type: Boolean,
            required: true
        },
        admin: {
            type: Boolean
        },
        user: {
            type: Object
        }
    },
    emits: ['login', 'logout', 'createCustomer', 'createAdmin'],
    methods: {
        login(loginType, email, password) {
            this.$emit('login', loginType, email, password);
        },
        logout() {
            this.$emit('logout');
        },
        createCustomer() {
            this.showCreateCustomer = true;
        },
        createAdmin() {
            this.showCreateAdmin = true;
        },
        enterCreateCustomer() {
            this.showCreateCustomer = false;
        },
        enterCreateAdmin() {
            this.showCreateAdmin = false;
        },
        manageUsers() {
            this.managingUsers = true;
        },
        deleteSelf() {            
            this.$emit('logout');
            if (this.$props.admin) {
                fetch('/admins', {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.$props.user)
                }).then(async res => {
                    console.log(await res.json());
                }).catch(err => console.log(err))
            }
            else {
                fetch('/users', {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.$props.user)
                }).then(async res => {
                    console.log(await res.json());                    
                })
            }
        }
    }
}
</script>

<template>
    <manageUsers v-if="managingUsers" />
    <div v-else class="sidebar">
        <Login v-if="!userLoggedIn && !showCreateCustomer" @login="login" @createCustomer="createCustomer" />
        <ClientAccess v-if="userLoggedIn && !admin && !showCreateCustomer && !showCreateAdmin && !editing" @logout="logout"
            @delete="deleteSelf" @edit="editing = true" />
        <AdminAccess v-if="userLoggedIn && admin && !showCreateCustomer && !showCreateAdmin && !editing" @logout="logout"
            @createAdmin="createAdmin" @manage-users="manageUsers" @delete="deleteSelf" @edit="editing = true" />
        <CreateCustomer v-if="showCreateCustomer" @enterCreateCustomer="enterCreateCustomer" />
        <CreateAdmin v-if="showCreateAdmin" @enterCreateAdmin="enterCreateAdmin" />
        <EditingSelf v-if="editing" :user="user" :admin="admin" @finish-edit="editing = false"/>
    </div>
</template>

<style scoped>
.sidebar {
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
}

@media (max-width: 1280px) {
    .sidebar {
        top: 45px;
        height: calc(100vh - 45px);
        width: 100%;
    }
}
</style>