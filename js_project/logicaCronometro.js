let minuto = 0;
let segundo = 0;
let milissegundo = 0;

let cronometro;

function iniciar() {
  pausar();
  cronometro = setInterval(() => { timer(); }, 10);
}

function pausar() {
  clearInterval(cronometro);
}

function resetar() {
  minuto = 0;
  segundo = 0;
  milissegundo = 0;
  document.getElementById('minuto').innerText = '00';
  document.getElementById('segundo').innerText = '00';

  pausar();
}

function timer() {
  if ((milissegundo += 10) == 1000) {
    milissegundo = 0;
    segundo++;
  }
  if (segundo == 60) {
    segundo = 0;
    minuto++;
  }
  document.getElementById('minuto').innerText = retornarDado(minuto);
  document.getElementById('segundo').innerText = retornarDado(segundo);
}

function retornarDado(span) {
  return span >= 10 ? span : `0${span}`
}