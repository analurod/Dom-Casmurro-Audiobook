const numCaps = 10;
const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior')
const audioCapitulo = document.getElementById('audio-capitulo');
const capitulo = document.getElementById('capitulo');

let taTocando= 0;
let capituloAtual =1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar() {
    if(taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function proximaFaixa(){
    if(capituloAtual === numCaps){
        capituloAtual= 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }
    
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual  + ".mp3";
    capitulo.innerText = "Capítulo " + capituloAtual;

    tocarFaixa();
    taTocando=1;
}

function voltarFaixa(){
    if(capituloAtual === 1){
        capituloAtual= 10;
    } else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual  + ".mp3";
    capitulo.innerText = "Capítulo " + capituloAtual;
    
    tocarFaixa();
    taTocando=1;
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
