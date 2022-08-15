
/*Objetivo: Dado um Número inteiro, O algoritimo deve
  mostrar seus sucessores definidos pelo usuário
*/ 

var resultados = document.querySelector('.resultado');
var num = document.getElementById('num');
var sucessores = document.getElementById('sucessores');
var button = document.getElementById('button')



button.addEventListener('click',()=>{

        let Numero = parseInt(num.value) + 1;
        let Numero_sucessor = parseInt(sucessores.value) ;
        let Indice = 0;


        if(Numero_sucessor > 10){

          alert("Limite de 10 sucessores")

        }
        else{

          while(Indice < Numero_sucessor){

            let Soma = Numero ++;
    
            resultados.innerHTML+=`
              <p>`+Indice+` - `+Soma+`</p>
            `
        
        Indice ++;
      };

  }
    
});

document.getElementById('clear').addEventListener('click',()=>{

document.querySelector('.resultado').innerHTML = " ";

})