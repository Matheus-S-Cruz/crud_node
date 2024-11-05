//npm init -y
//npm install pg express dotenv
//node index.js

require("dotenv").config(); //dotenv:biblioteca para gerenciar as variáveis de ambiente de um projeto

const db = require("./db")

const port = process.env.PORT; //que esteja na variável de ambiente PORT de onde estamos hospedando

const express = require("express") //chamar, requerer o Express para um rojeto

const app = express() //cria um aplicativo web através do Express

app.get("/", (req,res) => {
    res.json({ //enviar respostas do JSON   
        message: "Funcionando!"
    })
})

app.get("/clientes", async(req,res) => {
    const clientes = await db.selectCustomers();
    res.json(clientes)
})

app.listen(port) // escutar as requisições que vem da porta

console.log("Backend rodando na porta " + port)