function Dica(dica){
    window.alert(dica)
}
function Resposta(resposta_certa){
    var resposta = prompt();
    if(resposta === resposta_certa){
        window.alert("Parabéns!")
    }
    else{
        window.alert("Resposta errada :/");
    }
}

document.getElementById("botao-responder").onclick = () => {Resposta("-")}
document.getElementById("botao-help").onclick = () => {Dica("bemvindonaoétudojunto")};