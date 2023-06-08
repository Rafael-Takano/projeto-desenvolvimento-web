<template>
    <label class="logo"><img src="/imgs/logo.png" alt="a"></label>
</template>

<style scoped>
    img{
        float: left;
        width: 220px;
        height: 58px;
        margin: 13.5px 8px;
    }

    @media (max-width: 900px) { 
        img {
            position: fixed;
            width: 30%;
            left: 35vw;
            height: 7.91vw;
            margin: calc((85px - 7.91vw)/2) 0px;
        }
    }
</style>