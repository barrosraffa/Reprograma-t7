 window.addEventListener('DOMContentLoaded', function(event) {

    let botao = document.getElementById("botao");
    botao.addEventListener("click",function(){
        console.log("funciona!")

        let check = document.querySelectorAll(".check")
        let opcaoMarcado = 0;

        for(let i = 0; i <check.length; i++){ // length são quantos itens tem dentro da lista

            if(check[i].checked == true){
                opcaoMarcado ++
                console.log("funcionoooou")
            }
        }

        //preciso chamar o resultado do html

        //a var precisa ser maior ou menor que os outros numeros 

        let resultado = document.getElementById("resultado");

        if (opcaoMarcado <= 4) { 
            resultado.innerHTML = `Você marcou ${opcaoMarcado} de 30 nessa lista. Polêmica não é com você. Você gosta do feijão com arroz. Quer dizer, você gosta de feijão com arroz? Ou acha polêmico?;`
        }
        else if (opcaoMarcado <= 5 || opcaoMarcado <=9){
            resultado.innerHTML = `Você marcou ${opcaoMarcado} de 30 nessa lista. Até que você come bastante comida polêmica! Mas dá pra explorar mais coisas ainda, hein? Parabéns!`;
        }
        else if (opcaoMarcado <=10 || opcaoMarcado <=14){
            resultado.innerHTML = `Você marcou ${opcaoMarcado} de 30 nessa lista. Caramba, você come DE TUDO, parabéns! O pessoal pode te convidar pra jantar tranquilo: você nunca vai fazer desfeita.`;
        }
        else {
            resultado.innerHTML = `Você marcou ${opcaoMarcado} de 30 nessa lista. MITOOOOOU!`};

    })
});