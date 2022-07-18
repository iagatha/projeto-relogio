
function atualizarTempo() {
    var agora = new Date();

    var horario = corrigirHorario(agora.getHours()) + ":" + corrigirHorario(agora.getMinutes()) + ":" + corrigirHorario(agora.getSeconds());

    var display = document.querySelector(".display");
    display.textContent = horario;

}

function corrigirHorario(numero){
    if(numero < 10){
        numero = "0" + numero
    }
    return numero
}

atualizarTempo();
setInterval(atualizarTempo, 1000);
