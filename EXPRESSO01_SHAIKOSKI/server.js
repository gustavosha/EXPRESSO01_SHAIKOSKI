const express = require('express');
const server=express();

server.listen(3000);

server.get('/',(req, res)=>{
    res.send('<h1>Olá ExpressJs</h1>');
})

server.get('/sobre',(req, res)=>{
    res.send('<h2>Esse é o servidor do 3DS</h2>');
})

server.get('/servicos',(req, res)=>{
    res.send('<h2>Esse é o servidor de serviços do 3DS</h2>');
})

server.use((req,res)=>{
    res.status(404).send("<h2>Lamento, não encontramos esse recurso</h2>")
    
})
