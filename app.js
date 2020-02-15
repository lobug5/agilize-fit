/**Arquivo de configurações servidor*/
let server = require('./config/Server');

server.listen(process.env.PORT || 3000,()=>{
    console.log('Servidor OK');
})

