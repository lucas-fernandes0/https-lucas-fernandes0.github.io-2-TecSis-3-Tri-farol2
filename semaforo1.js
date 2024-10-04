let currentColor = 0; //0 = vermelho, 1 = amarelo, 2 = verde
const vermelhoTempo = 3000; //3sec
const amareloTempo = 1000; //3sec
const verdeTempo = 3000; //3sec

function trocarCor(){
    const luzes = document.querySelectorAll('.luz');

    //Resetando todas as luzes
    luzes.forEach(luz => luz.classList.remove('active'));

    //ativando a luz correspondente
    if(currentColor == 0){
        luzes[0].classList.add('active');//Vermelho
        setTimeout(trocarCor, vermelhoTempo);
        currentColor = 1;
    } else if(currentColor == 1){
        luzes[1].classList.add('active');//Amarelo
        setTimeout(trocarCor, amareloTempo);
        currentColor = 2;
    } else{
        luzes[2].classList.add('active');//Verde
        setTimeout(trocarCor, verdeTempo);
        currentColor = 0;
    }
}

//Iniciando o semáforo
trocarCor();