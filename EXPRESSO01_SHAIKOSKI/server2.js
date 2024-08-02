const express = require('express');
const server2 = express();

server2.listen(3000);

/*
criando nosso padrão de rotas
-principal
-serviços
-erro
-sobre
*/

server2.get('/principal',(req,res)=>{
    res.sendFile('./html/principal.html',{root:__dirname})
})

server2.get('/servicos',(req,res)=>{
    res.sendFile('./html/servicos.html',{root:__dirname})
})

server2.get('/sobre',(req,res)=>{
    res.sendFile('./html/sobre.html',{root:__dirname})
})

server2.get('/acerca',(req,res)=>{
    res.redirect('/sobre')
    
})


server2.use('/',(req,res)=>{
    res.sendFile('./html/erro.html',{root:__dirname})
})