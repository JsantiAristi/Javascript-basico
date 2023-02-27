const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const p = document.querySelector("#resultado");

form.addEventListener("submit" , sumarInputs);

function sumarInputs(event){
    event.preventDefault();
    const sumaInputs = (Number(input1.value)  + Number(input2.value));
    p.innerText = "Resultado " + sumaInputs;
}
