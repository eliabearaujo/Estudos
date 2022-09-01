let satual=1; //Quarda o slide atual para ser exibido
let smax=3; //Informa o número máximo de slides
let stmp=5000; //Tempo de exibição de cada slide

function troca () {
    //Comandos para ocultar os slides, na verdade ocultar as divs, b1, b2 e b3
    document.getElementById("b1").style.visibility="hidden";
    document.getElementById("b2").style.visibility="hidden";
    document.getElementById("b3").style.visibility="hidden";
    //Após ocultar as divs, vamos mostrar somente a div com o slide atual, informado na variável “satual”
    document.getElementById("b"+satual).style.visibility="visible";
    //Depois de exibir o slide atual, precisamos preparar a variável para o próximo slide, então incrementamos o valor da variável satual em 1
    satual=satual+1;
    //Este IF controla para que o incremento anterior não ultrapasse o número máximo de slides, então, quando ultrapassar o número máximo de slides, iremos voltar para o primeiro slide
    if(satual > smax){
        satual=1;
    }
}

//A próxima função é responsável por iniciar o trabalho de troca do slider, esta função será chamada quando a página for carregada, irá ocultar dois slides e deixar o último visível e ativará o “timer” que chamará a função de gerenciamento de troca dos slides de três em três segundos.
function slider () {
    //Ocultar dois slides e deixar o último visível
    document.getElementById("b1").style.visibility="hidden";
    document.getElementById("b2").style.visibility="hidden";
    document.getElementById("b3").style.visibility="visible";
    //Configuração do interval que irá chamar a função de troca de três em três segundos
    sliderTimer=setInterval(troca,stmp);
}