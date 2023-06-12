<script setup>
    const emit = defineEmits(['response'])
</script>

<template>
    <div class="dim">
        <div class="questionBox">
            <p>Do you really want to delete this product?</p>
            <div class="inputs">
                <input type="button" value="No" class="No" @click="emit('response', false)">
                <input type="button" value="Yes" class="Yes" @click="emit('response', true)">
            </div>
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

    .questionBox {
        width: 40%;
        height: auto;
        margin: 10vw 30% 0;
        background-color: #444;
        border: 2px #999 solid;
        color: #FFF;
        border-radius: 3vw;
        padding: 3vw;
    }

    p {
        margin-bottom: 1vw;
    }
    
    .inputs {
        text-align: right;
    }

    input {
        border-radius: .5vw;
        border: 2px #999 solid;
        color: white;
        font-size: 2vw;
        margin: 0 1vw;
        padding: .2vw 1vw;
    }

    .Yes {
        background-color: rgb(0,0,139,.25);        
    }
    .No {
        background-color: rgba(139,0,0,.25);
    }
    
    @media (max-width: 1280px) {
        .dim {
            top: 45px;
            height: calc(100vh - 45px);
        }
        .questionBox {
            width: 70%;
            margin: 20vw 15% 0;
        }

        input {
            font-size: 5vw;
        }
    }

</style>