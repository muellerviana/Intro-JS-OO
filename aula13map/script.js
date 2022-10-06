let elementoNum=document.getElementById('inp-num');
let texx=document.getElementById('texto');
let arr=[];
let elementoCalc=document.getElementById('btn-calcular');
let elementoLimp=document.getElementById('btn-limpar');


let dado={
    numero: elementoNum,
};
arr.push(dado);

let newArr = dado.map(function (item) {
    return {
        numero: item.numero*3
    }
});

function limpar(){
    texx.value="";
}

elementoCalc.addEventListener("click",seila);
elementoLimp.addEventListener("click",limpar);
console.log(newArr)
texx.innerHTML=newArr;

