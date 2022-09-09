/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js"></script>

<script type="text/javascript">$("#data").mask("(00) 0000-00009");</script>
*/

var saldo =100.0;

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