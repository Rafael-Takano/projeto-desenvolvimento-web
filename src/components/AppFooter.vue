<template>
    <footer> 
		<ul id="creditos">
			<strong>Feito por:</strong>
			<li>
				<p class="pleft">Igor Boson</p>							
				<p class="pright">NUSP: 11200517</p>
			</li>
            <li> 
                <p class="pleft">
                    Olavo Morais 
                </p>
                <p class="pright">
                    NUSP: 11297792                    
                </p>
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
        font-size: 1.5625vw;
    }

    ul,  a {
        width: 60vw;
        margin: 0px auto;
        padding: 1.5625vw 0px 0px;	
    }

     a,  a:hover,  a:active {
        display: block;
        color: #fff;
        padding-bottom: 2.0833vw;
    }

     li {
        width: 60vw;
        display: table;
        padding: 0.20833vw 1.5625vw;
    }

    .pleft {
        float: left;
    }

    .pright {
        float: right;
    }

    @media (max-width: 1280px) {
         ul,  a {
            width: 100%;		
            font-size: 3vw;
        }

         li {
            width: 100%;
            font-size: 2.6vw;
        }
    }
        

</style>