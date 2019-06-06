class Botao {
    constructor(cor, tamanho, texto, icone){
        this.cor = cor
        this.tamanho = tamanho
        this.texto = texto
        this.icone = icone
    }
    desenhaBotao(){
        let novoBotaoDom = document.createElement('button')
        novoBotaoDom.setAttribute('class', `${this.cor} ${this.tamanho}`)

        console.log(this.icone)
        if(this.icone){

        let tagIcone = document.createElement('i')
        tagIcone.setAttribute('class', `fas ${this.icone}`) //é quando voce quer concatanar o valor de uma classe com valor de uma string
        novoBotaoDom.appendChild(tagIcone)
        let text = document.createTextNode(this.texto)
        console.log('aaaa')
        novoBotaoDom.appendChild(text)
        } else{
            novoBotaoDom.innerHTML = this.texto
        }
        console.log(novoBotaoDom)

        document.getElementById('buttons_section').appendChild(novoBotaoDom)
        console.log(novoBotaoDom)
    }
}
let novoBotao = new Botao('roxo', 'grande', 'Default')
novoBotao.desenhaBotao()

let botaoLilas = new Botao('lilas', 'grande','Default')
botaoLilas.desenhaBotao()

let botaoTransparente = new Botao('transparente-grande', 'grande', 'Default')
botaoTransparente.desenhaBotao()

let botaoIcone = new Botao ('roxo','grande', 'ICONE','fa-address-book')
botaoIcone.desenhaBotao()
