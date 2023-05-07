
# Projeto de Desenvolvimento Web
## Alunos

Igor Boson **NUSP:** 11200571 

Rafael Takano  **NUSP:** 11200459

## Requisitos
O sistema possui os mesmos requisitos explicitados na descrição do projeto. Sobre o requisito específico ao nosso sistema, temos uma loja online de um supemercado, em que cada item possui uma categoria como _fruits_ e _vegetables_, atributo que é usado para filtrar os diferentes items disponíveis no sistema.

## Descrição do Projeto
O site Express Market tem dois tipos de usuário, cliente e admin. Todos os usuários podem visualizar os items disponíveis, filtrar por categorias e ver a descrição de itens. Caso seja um usuário não logado, ele pode fazer login. Tanto o usuário não logado e o cliente podem colocar itens no seu carrinho, mas para finalizar a compra o usuário deve fazer login. O usuário admin tem o poder de criar cadastrar no sistema outro usuário admin ou usuários cliente. E também, pode criar, editar ou remover itens do sistema. Ambos o cliente e admin possuem a opção de deslogar ou deletar a sua conta.
Veja aqui o 
[Diagrama de navegação](https://github.com/Rafael-Takano/projeto-desenvolvimento-web/blob/main/imgs/Navigation%20Diagram.png) 

## Comentários sobre o código
A página inicial está dividida em 3 partes principais, uma navbar, um footer e entre eles tem uma section onde estão organizados os itens. Cada item é uma div em que é organizada a imagem e informações referentes ao item. 
Na página de adição de um item, temos sobre a tela uma div com caixas de input para receber as informações do item. E na tela do carrinho, temos uma div representando o carrinho e, contido nesse elemento, temos outras divs para cada item no carrinho.

## Plano de Testes
Visto a simplicidade das páginas elaboradas até então, ainda não vimos a necessidade de fazer testes automatizados. Os testes até então foram feitos de forma manual, mexendo na proporção da tela, com diferente números de itens e tamanho dos inputs.

## Resultado dos Testes
Os resultados foram como o esperado, mas vale ressaltar que a responsividade das telas ainda não está como o esperado, e pretendemos aperfeiçoar isso nas próximas etapas.

## Como executar
Para rodar o programa, é necessário baixar o código disponível aqui no github, unzipar se necessário, e abrir as páginas localizadas em [/html pages](https://github.com/Rafael-Takano/projeto-desenvolvimento-web/tree/main/html%20pages)

## Problemas
Tivemos dificuldades em como organizar o display dos itens, principalmente no quesito responsividade, pois o display "quebrava" quando reduzíamos o tamanho da tela, mas depois de um tempo procurando soluções conseguimos resolver.

## Comentários Extras 
Não nos atentamos muito a deixar o site "dinâmico" até então, por exemplo, fazer a sidebar do carrinho aparecer somente quando o botão do carrinho é apertado, visto que a ideia dessa etapa é fazer apenas as páginas mockup.
