function tocarSomPom (){
    document.querySelector('#som_tecla_pom').play();
    document.querySelector('.tecla_pom').onclick = tocarSomPom;
}

function tocarSomclap (){
    document.querySelector('#som_tecla_clap').play();
    document.querySelector('.tecla_clap').onclick = tocarSomclap;
}

function tocarSomtim (){
    document.querySelector('#som_tecla_tim').play();
    document.querySelector('.tecla_tim').onclick = tocarSomtim;
}

function tocarSompuff (){
    document.querySelector('#som_tecla_puff').play();
    document.querySelector('.tecla_puff').onclick = tocarSopuff;
}

function tocarSomsplash (){
    document.querySelector('#som_tecla_splash').play();
    document.querySelector('.tecla_splash').onclick = tocarSomsplash;
}

function tocarSomtaim (){
    document.querySelector('#som_tecla_taim').play();
    document.querySelector('.tecla_taim').onclick = tocarSomtaim;
}

function tocarSompsh (){
    document.querySelector('#som_tecla_psh').play();
    document.querySelector('.tecla_psh').onclick = tocarSomPsh;
}

function tocarSomtic (){
    document.querySelector('#som_tecla_tic').play();
    document.querySelector('.tecla_tic').onclick = tocarSomtic;
}

function tocarSomtam (){
    document.querySelector('#som_tecla_tam').play();
    document.querySelector('.tecla_tam').onclick = tocarSomtam;
}

document.querySelectorAll('.tecla'); //a funçao determina a generalização das classes que contém o nome escrito tecla