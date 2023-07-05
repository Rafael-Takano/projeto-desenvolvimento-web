<script setup>
import { ref } from 'vue'
//import users from '../json/customers.json'
//import admins from '../json/admins.json'


const clientClass = ref('opt selected');
const adminClass = ref('opt');
const showAdmins = ref(false);
const selected = ref(Object);
const editing = ref(false)
const users = ref(Array)
const admins = ref(Array)

function reloadCli() {
    fetch('/users', {
        method: 'GET'
    })
        .then(
            async res => users.value = await res.json()
        )
        .catch(
            err => console.log(err)
        );
}
function reloadAdm() {

    fetch('/admins', {
        method: 'GET'
    })
        .then(
            async res => admins.value = await res.json()
        )
        .catch(
            err => console.log(err)
        );
}

reloadCli()
reloadAdm()

function showClient() {
    clientClass.value = 'opt selected';
    adminClass.value = 'opt';
    showAdmins.value = false;
    selected.value = '';
}

function showAdmin() {
    adminClass.value = 'opt selected';
    clientClass.value = 'opt';
    showAdmins.value = true;
    selected.value = '';
}

function selectUser(user) {    
    selected.value = user;
}

function update() {
    if (selected.value == '') {
        alert('Choose an User to edit')
        return
    }
    editing.value = true;
}

function remove() {
    if (showAdmins.value) {
        alert('You can\'t remove another admin')
        return
    }
    if (selected.value == '') {
        alert('Choose an User to remove')
        return
    }
    let data = selected.value;
    fetch('/users', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(
            async () => {                
                reloadCli();
            }
        )
}

</script>

<template>
    <div class="dim">
        <div v-if="editing" class="editing">
            <label for="name"> Name: </label> <br>
            <input type="text" name="name" :value="selected.name" class="editInput"> <br>
            <label for="email"> E-mail: </label> <br>
            <input type="text" name="email" :value="selected.email" class="editInput"> <br>
            <label for="phone"> Phone: </label> <br>
            <input type="text" name="phone" :value="selected.phone" class="editInput"> <br>
            <label for="address"> Address: </label> <br>
            <input type="text" name="address" :value="selected.address" class="editInput"> <br>
            <input type="button" value="Cancel" class="br-btn">
            <input type="button" value="Submit" class="br-btn">
        </div>
        <div v-else class="content">
            <div class="tabs">
                <div :class="clientClass" @click="showClient"> Client </div>
                <div :class="adminClass" @click="showAdmin"> Admin </div>
            </div>
            <div class="users">
                <div v-if="!showAdmins" v-for="user in users" class="user">
                    <div v-if="selected._id == user._id" class="selected">
                        <div class="info">
                            {{ user.name }}
                        </div>
                        <div class="info">
                            {{ user.email }}
                        </div>
                        <div class="info">
                            {{ user.phone }}
                        </div>
                        <div class="info">
                            {{ user.address }}
                        </div>
                    </div>
                    <div v-else @click="selectUser(user)">
                        <div class="info">
                            {{ user.name }}
                        </div>
                        <div class="info">
                            {{ user.email }}
                        </div>
                        <div class="info">
                            {{ user.phone }}
                        </div>
                        <div class="info">
                            {{ user.address }}
                        </div>
                    </div>
                </div>
                <div v-else v-for="user in admins" class="user">
                    <div v-if="selected.email == user.email" class="selected">
                        <div class="info">
                            {{ user.name }}
                        </div>
                        <div class="info">
                            {{ user.email }}
                        </div>
                        <div class="info">
                            {{ user.phone }}
                        </div>
                        <div class="info">
                            {{ user.address }}
                        </div>
                    </div>
                    <div v-else @click="selectUser(user)">
                        <div class="info">
                            {{ user.name }}
                        </div>
                        <div class="info">
                            {{ user.email }}
                        </div>
                        <div class="info">
                            {{ user.phone }}
                        </div>
                        <div class="info">
                            {{ user.address }}
                        </div>
                    </div>
                </div>
            </div>
            <input type="button" value="Delete" @click="remove" class="br-btn">
            <input type="button" value="Update" @click="update" class="br-btn">
        </div>
    </div>
</template>

<style scoped>
.dim {
    position: fixed;
    top: 4.43vw;
    left: 0;
    width: 100%;
    height: calc(100vh - 4.43vw);
    background-color: rgba(0, 0, 0, 0.5);
}

.content {
    display: table;
    width: 80%;
    height: auto;
    margin: 5vw 10% 0;
    background-color: #444;
    border: 2px #999 solid;
    color: #FFF;
    border-radius: 3vw;
    padding: 2.3vw 3vw 3vw;
}

.opt {
    display: inline-block;
    padding: .7vw 2vw;
    background-color: #777;
    margin: 1px 0 0;
    color: #444;
}

.selected {
    background-color: #999;
    color: #fff;
    border: #fff solid 1px;
    border-bottom: none;
}

.users {
    width: 100%;
    height: 40vh;
    border: #fff solid 1px;
    overflow: scroll;
}

.info {
    text-align: center;
    max-height: 50px;
    line-height: 50px;
    display: inline-block;
    max-width: 25%;
    width: 25%;
    text-overflow: ellipsis;
    overflow: hidden;
}

.br-btn {
    float: right;
    border: none;
    border-radius: 5px;
    min-width: 60px;
    margin: 10px 0 1px 5px;
    text-transform: uppercase;
    width: 9%;
    padding: 5px;
}

.selected {
    background-color: #999;
    border: none;
}

.editing {
    display: table;
    width: 60%;
    height: auto;
    margin: 5vw 20% 0;
    background-color: #444;
    border: 2px #999 solid;
    color: #FFF;
    border-radius: 3vw;
    padding: 2.3vw 3vw 3vw;
    font-size: 25px;
}

.editInput {
    color: #fff;
    background-color: #444;
    line-height: 25px;
    border: 2px #fff solid;
    padding: 0 10px;
    margin-bottom: 10px;
}

@media (max-width: 1280px) {
    .dim {
        top: 45px;
        height: calc(100vh - 45px);
    }
}
</style>
