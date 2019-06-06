var elogios = [
    "Diva sem defeito",
    "Não é github, mas é uma gatinha",
    "Máquina de vencer",
    "ícone incompreendido",
    "Responsivo #SQN",
    "Maravilinda",
    "Fada sensata",
    "Cristal",
    "Maravigold",
    "Zero defeitos",
    "Bombomzinho",
    "Um neném",
    "Um pão",
    "Ai nossa",
    "Uma louca"
];

function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}