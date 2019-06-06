window.addEventListener('DOMContentLoaded', function (event) {

const jogoLista = ["pedra", "papel", "tesoura", "lagarto", "spock"];

const selectJogoList = document.getElementById("jogoLista");

selectJogoList.addEventListener('change', function (){

    const opcaoComputador = jogoLista[Math.floor(Math.random()*jogoLista.length)];
    const selecaoDoUsuario = this.value;
    console.log(opcaoComputador)
    
    switch (selecaoDoUsuario) {
        case jogoLista[0]: //pedra
            if (selecaoDoUsuario == opcaoComputador) {
                alert('empate')
            } else if (opcaoComputador == jogoLista[3] || opcaoComputador == jogoLista[2] ) {
                alert('voce ganhou')
            } else {
                alert('computador ganhou')
            }
            break; //fim da primeira comparacao
        
        // default:
        //     break;

        case jogoLista[1]: //papel
        if (selecaoDoUsuario == opcaoComputador) {
            alert('empate')
        } else if (opcaoComputador == jogoLista[4] || opcaoComputador == jogoLista[2] ) {
            alert('voce ganhou')
        } else {
            alert('computador ganhou')
        }
        break; //fim da segunda comparacao

        case jogoLista[1]: //tesoura
        if (selecaoDoUsuario == opcaoComputador) {
            alert('empate')
        } else if (opcaoComputador == jogoLista[0] || opcaoComputador == jogoLista[2] ) {
            alert('voce ganhou')
        } else {
            alert('computador ganhou')
        }
        break; //fim da segunda comparacao

    default:
    }
    
});


})

