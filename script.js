const dias = document.getElementById('dia')
const horas = document.getElementById('hora')
const minutos = document.getElementById('minuto')
const segundos = document.getElementById('segundo')

const lancamento = "03 dec 2023"
 
function countdown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal=  (dataLanc - hoje)/1000;
     
    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60; 
    const finalSegundos = Math.floor(segTotal) % 60
    
    dias.innerHTML = finalDias
    horas.innerHTML = formatoTempo (finalHoras)
    minutos.innerHTML = formatoTempo (finalMinutos)
    segundos.innerHTML = formatoTempo (finalSegundos)
}

function formatoTempo( tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

countdown();
setInterval (countdown, 1000)

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight")
}

function addKeyboardEventListerner(){
document.addEventListener('keydown', (event) => {

    var ingresso1 = document.getElementById('quinta');
    var ingresso2 = document.getElementById('sexta');
    var ingresso3 = document.getElementById('sabado');
    var ingresso4 = document.getElementById('domingo');

    var code = event.code;
    if(code == 'Digit1') {
        ingresso1.classList.toggle("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit2') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.toggle("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit3') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.toggle("card-highlight");
        ingresso4.classList.remove("card-highlight");
    }
    if(code == 'Digit4') {
        ingresso1.classList.remove("card-highlight");
        ingresso2.classList.remove("card-highlight");
        ingresso3.classList.remove("card-highlight");
        ingresso4.classList.toggle("card-highlight");
    }
} , false)
}

addKeyboardEventListerner();