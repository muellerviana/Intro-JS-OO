let elementoNum=document.getElementById('inp-num');
let texx=document.getElementById('texto');
let valorTexx=texx.value;
let arr=[];
let elementoCalc=document.getElementById('btn-calcular');
let elementoLimp=document.getElementById('btn-limpar');


let dado={
    numero: valorTexx,
};
arr.push(dado);

let newArr=dado.map(function( elem ){
    return{
        numero: elem.numero*3
    }
})
console.log(newArr)
texx.innerHTML=newArr;

