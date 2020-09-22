# note-saves


 >npm i  para instalar as dependências do projeto

Essa aplicação salva informações, anotações em um bando de dados para leitura e utiliza uma api.


### Servidor

Front-end: utliza Javascript sem frameworks, css e html.

O js faz o processo para editar dados existentes, excluir e enviar para a API novos dados.

Back-end: Utiliza Nodejs com as frameworks express, nunjucks e sqlite-async.

O node serve os arquivos html, css, JS e o banco de dados. Atráves do nunjucks o node insere os  
dados importados do banco da dados no front-end 

### API

Front-end: apenas html para mostrar os dados

Back-end: Utiliza Nodejs com os frameworks express, nunjucks, cors e sqlite-async.

Recebe os dados do servidor e adiciona os dados recebidos na query string no banco  
de dados e exclui também.
