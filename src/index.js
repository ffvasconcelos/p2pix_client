/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>

<script type="text/javascript">$("#data").mask("(00) 0000-00009");</script>
*/
var saldo =100.00;

const express = require('express')
const {createServer} = require('http')
const http = require("http");

const app = express();
const httpServer = createServer(app);

const { io } = require("socket.io-client");

const socket = io("http://localhost:8000/", {
    path: '/p2pix_connect',
})

socket.on("connect", () => {
    console.log("Connected with server succesfully")
});

socket.on("disconnect", () => {
    console.log("Server connection undone")
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/transaction', ({query}, res) => {
    const value = Number.parseFloat(query.value).toFixed(2)

    saldo = saldo + value

    res.send().status(200)
})

app.get('/register', ({query}, res) => {
    const name = query.name

    socket.emit("addClient", name)

    res.send().status(200)
})

httpServer.listen(3000, () => {
    console.log('Server listening to port 3000')
});

function atualizarSaldo(){
    let computar = document.getElementById('saldo');
    computar.innerHTML = '';
    let valor = document.querySelector('#valor').value;
    valor = parseFloat(valor);
    
    saldo = saldo - valor;
    
   let span = document.createElement('span');
   let saldoformatado = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
   span.innerHTML = `<center><span id="tamanho">Saldo</span><br>${saldoformatado}</center>`;
   computar.appendChild(span);
   
   resumo()
}

function resumo(){
    
    let tabela = getElementById('tabela')
    let linha = document.createElement('tr');
    let origem = getElementById('origem').value 
    let destino = getElementById('destino').value 
    let valor = getElementById('valor').value 
    linha.innerHTML = 
    `<tr> <td>${origem}</td><td>${destino}</td><td>R$ ${valor}</td></tr>`
    tabela.appendChild(linha);
}

function getOrigem(){
    let login = getElementById('login').value
    origem = getElementById('origem')
    origem.value = login
}