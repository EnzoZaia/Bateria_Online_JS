function tocaSom(seletorAudio) {
    
    const elemento = document.querySelector(seletorAudio);

    if(elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } 
    else {
        console.log('Elemento não encontrado ou seletor invalido');
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let cont = 0; cont < listaDeTeclas.length; cont++) {
    
    const teclas = listaDeTeclas[cont];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = function () {
        tocaSom(idAudio);
    };

    teclas.onkeydown = function(event) {
        
        if(event.code === 'Space'  || event.code === 'Enter'){
        teclas.classList.add('ativa');
        }

    }

    teclas.onkeyup = function() {
        teclas.classList.remove('ativa');
    }

}
