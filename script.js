var a = document.getElementById('area')
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout',sair)
function clicar(){
   a.innerText ='clicou!' 
   a.style.background='red'  
}
function entrar(){
    a.innerText= 'entrou!'
    a.style.background='blue'
}
function sair(){
    a.innerText='saiu!'
    a.style.backgroundColor='yellowgreen'
}
function somar(){
var soma = document.getElementById('botao')
soma.addEventListener('click', somar)
var res = document.getElementById('resultado')
var nun1= document.getElementById('dg1')
var nun2= document.getElementById('dg2')
var n1 = Number(nun1.value)
var n2 = Number(nun2.value)
soma = n1 + n2
res.innerHTML = `a  soma enter ${n1} e ${n2} é igaul a ${soma}`
}

// estudo de condições com javaScript
function velocidade(){
var vel = document.getElementById('vel')
var vel1 = Number(vel.value)
console.log(` a velocidade do seu carro é ${vel} km/h`) 
 if (vel1>90){
    resut.innerHTML=`você ultrapassou a velocidade permitidA ${vel1} km/h Multado`
 }
 else{
    resut.innerHTML =`dirija sempre utilizando sinto de segurança tenha uma boa viagem` 
 }
}
// calculando idade para votação
function verificar_idade(){
   var veri = document.querySelector('#veri')
   veri.addEventListener('click', verificar_idade)
   var i = document.querySelector('#idade')
   var res = document.getElementById('res')
   var i=Number(i.value)
   if (i < 16){
      res.innerHTML= `Desculpe você possui ${i} anos  é menor de idade `
   }
   else {
      if(i < 18 || i >66){
      res.innerHTML=`Muito bem vc possui ${i} anos seu voto é opcicional`
      
   }
   else{
      res.innerHTML=`Muito bem vc possui ${i} anos seu voto é obrigatório`
   }
   }
   
}
//
function insert(num){
 var numero= document.getElementById('r').innerHTML ;
 document.getElementById('r').innerHTML=numero+num;

}
function limpar(){
  document.getElementById('r').innerHTML =""; 
}
function apagar(){
   var resultado = document.getElementById('r').innerHTML;
   document.getElementById('r').innerHTML= resultado.substring(0,resultado.length -1)
}
function resolver(){
   var resultado = document.getElementById('r').innerHTML;
   if (resultado){
      document.getElementById('r').innerHTML = eval(resultado)
   }
}

/*JOGO DA VELHA*/
 const jogador = document.getElementById('jogador');

let selec;
let play = "x";

let positions = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [1, 4, 7],
   [2, 5, 8],
   [3, 6, 9],
   [1, 5, 9],
   [3, 5, 7],
];
function init(){
   selec = [];
   jogador.innerHTML = `${play}`;
   document.querySelectorAll("#jogo button").forEach((item)=> {
      item.innerHTML = "";
      item.addEventListener('click', newMove);
   });
}

init();

function newMove(e){
   const index = e.target.getAttribute("data-i");
   e.target.innerHTML = play;
   e.target.removeEventListener("click", newMove);
   selec[index] = play;

setTimeout(() => { 
   check();
}, [100]);

play = play === "x" ? "O" : "x";
jogador.innerHTML = `${play}`
}
function check(){

   let playultimomovimento = play === "x" ? "O" : "x";

const items = selec
.map((item , i) => [item, i])
.filter((item) => item[0] === playultimomovimento)
.map((item) => item[1]);

for ( pos of positions) {
   if (pos.every((item) => items.includes(item))) {
      alert("O jOGADOR '" + playultimomovimento + "'GANHOU");
      init();
      return;
      }
   }
}

