/* Objetivo: O usuario acrescenta 2 Valores a uma divisão,
e o Algoritimo vai dizer o resto e o consiente da mesma */


var resultados = document.querySelector('.resultado')
var Primeiro_Valor = document.getElementById('num')
var Segundo_Valor = document.getElementById('num2')


    // Calcular a Divisão dos Valores

document.getElementById('button')
.addEventListener('click',()=>{

let Valor_inicial = Primeiro_Valor.value;
let Divisor = Segundo_Valor.value;

    let divisao = Valor_inicial/Divisor;
    let Resto = Valor_inicial % Divisor;

    divisao = divisao.toFixed(2)


    resultados.innerHTML += `

        <h2>Quociente : `+divisao+`</h2>
        <h2>Resto : `+Resto+`</h2>
    
    `;


});

    // Limpar a Caixa de resultaods

document.getElementById('clean')
.addEventListener('click',()=>{

document.querySelector('.resultado').innerHTML = " ";

})