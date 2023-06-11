<script setup>
    import categories from './json/Categories.json'
    const emit = defineEmits(['reset', 'set'])

    function reset() {
        emit('reset');
    }
    function set(params) {
        emit('set', params)
    }
</script>

<template>
    <div class="categories"> 
        <input type="button" value="All products" @click="reset">
        <input type="button" v-for="category in categories" :value="category" @click="set(category)">
    </div>
</template>

<style scoped>
    .categories {
        position: fixed;
        top: 4.43vw;
        width: 19.34vw;
        height: calc(100vh - 4.43vw);        
        background-color: #ac2020;        
        overflow: scroll;
    }
    input {
        width: 100%;
        text-align: center;
        font-weight: 400;
        text-transform: capitalize;
        line-height: 2.6vw;
        font-size: 1vw;
        color: white;
        display: block;
        background-color: rgba(0,0,0,0);        
        border: 1px solid #9c1010;        
    }

    @media (max-width: 1280px) {
        .categories {
            top: 45px;
            width: 100%;
            height: calc(100vh - 45px);
        }

        input {
            line-height: 10vw;
            font-size: 4vw;
        }
    }
</style>