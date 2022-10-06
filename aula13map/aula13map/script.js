let elementoNum = document.getElementById('inp-num');
let texx = document.getElementById('texto');
let arr = [];
let elementoCalc = document.getElementById('btn-calcular');
let elementoLimp = document.getElementById('btn-limpar');

/* ERRADO
// Sera que precisa de um objeto?
let dado = {
    numero: elementoNum, // isso aqui não ta pegando o valor e sim a referencia do elemento através do ID
};
arr.push(dado); // Isso aqui fora de uma função não  vai funcionar*/



let calcular = () => { // Precisa de uma função que calcule depois do click, esse era o gatilho pedido no exercício
    // Primeira coisa que fazemos é capturar o valor do número digitado no input e mandamos para o array:
    let numero = elementoNum.value;
    arr.push(numero);
    let newArr = arr.map(function (item) {
        // Isso aqui não é necessário porque agora seu array só tem os numeros digitados
        // return {
        //     //numero: item.numero 3 

        // }
        return  item * 3
    });
    console.log(newArr);
    // Agora inserimos no HTTML
    texx.innerHTML = newArr;
}
/* Fora de uma função isso não vai funcionar direito 
let newArr = dado.map(function (item) {
    return {
        numero: item.numero*3
    }
});
*/
function limpar() {
    texx.value = " ";
    texx.innerHTML = " ";
}
// Ta errado isso aqui
// elementoCalc.addEventListener("click",seila); // Seila não é uma função declarada, precisa chamar a função que deseja para fazer o cálculo
elementoCalc.addEventListener("click", calcular);
elementoLimp.addEventListener("click", limpar);
// console.log(newArr) // Aqui você não consegue acessar o newarr, ele está no escopo da função calcular agora que é o correto
// texx.innerHTML = newArr; // A mesma coisa aqui, fora do escopo da função você não consegue acessar o novo array mapeado