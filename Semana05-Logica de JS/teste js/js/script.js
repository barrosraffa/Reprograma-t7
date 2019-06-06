var imagens = [
    `<img class="img__gatinho" src="img/gatinho2.jpeg" alt="gatinho">`,
    `<img class="img__gatinho" src="img/gatinho3.jpg" alt="gatinho">`,
    `<img class="img__gatinho" src="img/gatinho4.jpeg" alt="gatinho">`,
    `<img class="img__gatinho" src="img/gatinho.jpg" alt="gatinho">`,
];


function sortearImagens() {
    var random = Math.floor(Math.random() *4);
    document.getElementById("aqui").innerHTML = imagens[random];
}