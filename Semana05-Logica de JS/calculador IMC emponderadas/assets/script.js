function calculoIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta");
    var lugarGif = document.getElementById("lugarGif")
    var gif;

    var resultado = peso / (altura * altura)
    var text;
    var cssClass;
    console.log("O seu IMC é " + resultado.toFixed(2))

    if(resultado < 18){
        text = "Cê ta linda, linda 😎"
        gif = `<img src="https://media.giphy.com/media/FrnpqArQZtti8/giphy.gif " alt="gif reacao rihana" >`;
        cssClass = "linha2"
    }
    else if(resultado >=18 && resultado < 25){
        text = "Eita, delicia! 😎"
        gif = `<img src="https://media.giphy.com/media/13wrMEy4bqtSIE/giphy.gif" alt="gif reacao rihana" >`;
        cssClass = "linha3"
    }
    else if(resultado >= 25 && resultado <30){
        text = "Oooooo, que maravigold! 😎"
        gif = `<img src="https://media.giphy.com/media/wr79haT16a4WQ/giphy.gif" alt="gif reacao rihana">`;
        cssClass = "linha4"
    }
    else if(resultado >= 30 && resultado <40){
        text = "Diva sem defeitos!!! 😎"
        gif = `<img src="https://media.giphy.com/media/MvZKiDJmB1XEs/giphy.gif" alt="gif reacao rihana">`;
        cssClass = "linha5"
    }
    else{
        text = "Ai meu coração! 😎"
        gif = `<img src="https://media.giphy.com/media/1lzPn2vEdZkSc4imnZ/giphy.gif" alt="gif reacao rihana">`;
        cssClass = "linha6"
    }

    resposta.innerHTML = resultado.toFixed(2) + ' - ' + text;
    resposta.className = cssClass;
    lugarGif.innerHTML = gif;

}