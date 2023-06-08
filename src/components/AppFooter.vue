<template>
    <footer> 
		<ul id="creditos">
			<strong>Feito por:</strong>
			<li>
				<p class="pleft">Igor Boson</p>							
				<p class="pright">NUSP: 11200517</p>
			</li>
			<li>
				<p class="pleft">Rafael Takano</p>
				<p class="pright">NUSP: 11200459</p>
			</li>
		</ul>

		<a href="https://github.com/Rafael-Takano/projeto-desenvolvimento-web">Página no Github do Site</a>		
	</footer>
</template>

<style scoped>

    footer {
        border-top: solid 2px #720000;
        background-color: #c92828;
        color: #fff;
        width: 100%;
        font-size: 30px;
    }

    ul,  a {
        width: 1102.5px;
        margin: 0px auto;
        padding: 30px 0px 0px;	
    }

     a,  a:hover,  a:active {
        display: block;
        color: #fff;
        padding-bottom: 40px;
    }

     li {
        width: 1102.5px;
        display: table;
        padding: 4px 30px;
    }

    .pleft {
        float: left;
    }

    .pright {
        float: right;
    }

    @media (max-width: 1150px) {
         ul,  a {
            width: 834.5px;		
        }

         li {
            width: 834.5px;
        }
    }
    
    @media (max-width: 690px) {
         ul {
            font-size: 20px;
        }
         li,  a{
            font-size: 18px;
        }
    }

</style>