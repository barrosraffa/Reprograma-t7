// let numero = {
//     num1: 4,
//     num2: 2,
//     soma: function() {
//         return num1 + num2
//     }
// }

// let numero2 = new Object( num=2, num1=4)

// let testereturn = {
//     num1: 2,
//     num2: 4,
//     soma: function(){
//         return this.num1 + this.num2
//     }
// }

// // Exemplo de constructor

// class Pessoa{
//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade = idade;
//     }
//     retornarNome(){
//         console.log(`Nome: ${this.nome}`);
 
//          class Professor extends Pessoa{
//             constructor(nome, idade, materia){
//                 super(nome, idade);
//                 this.materia = materia;
//             }
//         }


class usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
        if(this.admin === true){
            return `É usuario administrador`
        } else {
            return `Não é administrador`
        }
    }
}


    class admin extends usuario{
        constructor(email, senha){
            super(email, senha);
            this.admin = true;
        }
    } 


const User1 = new usuario('email@teste.com', 'senha123');
const Adm1 = new admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true