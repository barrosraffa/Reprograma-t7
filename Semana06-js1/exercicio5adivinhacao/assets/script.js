window.addEventListener('DOMContentLoaded', function (event) {

let imagens = [
    `<img class="img_serie" src="../img/atlanta.jpg" alt="imagem da serie atlanta">`,
    `<img class="img_serie" src="../img/blackmirror.jpg" alt="imagem serie black mirror">`,
    `<img class="img_serie" src="../img/desencanto.jpg" alt="imagem da serie desencanto">`
]

 
// let imagens = document

let botao = document.getElementById("botao");
botao.addEventListener("click",function(){

    document.getElementById("imagensGif").innerHTML = imagens[0];
    
    setTimeout(function(){ document.getElementById("imagensGif").innerHTML = imagens[1];}, 2000);
    setTimeout(function(){ document.getElementById("imagensGif").innerHTML = imagens[2];}, 4000);
    setTimeout(function(){ document.getElementById("imagensGif").innerHTML = 
    `<p> Atlanta </p>
    <p>Black Mirror</p>
    <p>Desencanto</p>` }, 6000) 

})

});