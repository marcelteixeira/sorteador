let inputSortearDe = document.getElementById("sortearDe");
let inputSortearAte = document.getElementById("sortearAte");
let btnSortear = document.getElementById("btnSortear");
let btnReiniciar = document.getElementById("btnReiniciar");
let btnFinalizar = document.getElementById("btnFinalizar");
let exibirNumeroSorteado = document.getElementById("exibirNumeroSorteado");
let exibirNumerosAnteriores = document.getElementById("exibirNumerosAnteriores");
let valorSortearDe, valorSortearAte;
let logNumerosSorteados = [];


exibirNumerosAnteriores.style.visibility = "hidden";

inputSortearDe.addEventListener("change", ()=>{
    valorSortearDe = Number(inputSortearDe.value);
    console.log(`Inicial alterado para: ${valorSortearDe}`);
});

inputSortearAte.addEventListener("change", ()=>{
    valorSortearAte = Number(inputSortearAte.value);
    console.log(`Final alterado para: ${valorSortearAte}`);
});



btnSortear.addEventListener("click", sortear);


let contadorSorteados = 1;

function sortear(){
    
    if(validaIntervalo(valorSortearDe, valorSortearAte)){
        let numeroSorteado;

        //Alterar comportamento da tela
        inputSortearDe.disabled = true;
        inputSortearAte.disabled = true;
        exibirNumerosAnteriores.style.visibility = "visible";

        //Sortear e exibir número aleatório.
        numeroSorteado =  Math.floor(Math.random() * (valorSortearAte - valorSortearDe + 1) + valorSortearDe);
        exibirNumeroSorteado.innerHTML = numeroSorteado;

        //Alimentar a exibitação de números anteriores
        exibirNumerosAnteriores.innerHTML += "<p>" + contadorSorteados + "º - " + numeroSorteado + "</p>";
        contadorSorteados++

        //alimentar o log de números sorteados
        logNumerosSorteados.push(numeroSorteado);
        
    } else{
        alert("valores invalidos");
    };
    
};

function validaIntervalo(inicial, final){
    console.log(`validaIntervalo(${inicial}, ${final})`);
    if((inicial > final) || (inicial < 0) || (final < 0) || (inicial == undefined) || (final == undefined)){
        return false;
    } else{
        return true;
    };
};





btnReiniciar.addEventListener("click", ()=>{
    let confirmaReiniciar = confirm("Você deseja reiniciar?");
    if(confirmaReiniciar){ reiniciar() };
});

function reiniciar(){
    inputSortearDe.disabled = false;
    inputSortearDe.value = "";
    inputSortearAte.disabled = false;
    inputSortearAte.value = "";
    exibirNumeroSorteado.innerHTML = "...";
    exibirNumerosAnteriores.style.visibility = "hidden";
    exibirNumerosAnteriores.innerHTML = "";
    contadorSorteados = 1;
}




btnFinalizar.addEventListener("click", ()=>{
    let confirmaFinalizar = confirm("Deseja finalizar o sorteio?");
    if(confirmaFinalizar){
        console.log(`Números Sorteados:`);
        logNumerosSorteados.forEach(num => {
            console.log(num);
        })
        reiniciar();
    }
});