# Projeto Base API Restful Nodejs
 Projeto base para criação de API Restful usando nodejs

 ### instalação
 Para efetuar a instalação siga os seguintes passos:

 - Clone o projeto deste repositório
 - Em um terminal execute npm install para instalar as dependencias do projeto
 - Caso não tenha instalado execute o comando npm install nodemon -g
 - Execute o comando nodemon app.js

 ### Estrutura Projeto

 - config
    - Server.js - Arquivo que contem todas as configurações do servidor
    pode ser comparado ao Webconfig do asp.net.
    - Database.js - Arquivo que contem configurações de banco de dados
    - JwtConfig.js - Arquivo com chave e configurações do sistema de 
    autenticação.
    - AuthJwt.js - Arquivo que contem as configurações da estrategia de autenticação.
    - users.js - Arquivo fake para teste do sistema
 - controllers
    - Esta pasta contem todos os arquivos de controller do sistema(Observar modelos e replicar para novos)
 - models
    - Esta pasta contem todos os arquivos de model do sistema (Observar os modelos e replicar para novos)
- routes
    - Esta pasta contem todos os arquivos de rota do sistema para o padrão reste
    (seguir o padrão dos arquivos para criação de novos)
- app.js
    - Este arquivo e o entrypoint da aplicação deve-se evitar adicionar dependencia que não possam ser configuradas no arquivo server.js



