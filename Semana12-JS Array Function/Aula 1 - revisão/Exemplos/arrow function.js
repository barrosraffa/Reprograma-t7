// const usuario = { nome: 'Diego', idade: 23 };

// function mostraIdade(usuario) {
//   return usuario.idade;
// } 

// mostraIdade(usuario);

const mostraIdade = (usuario) => {
    return usuario.idade
}

// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}

const mostraUsuario = (nome, idade); =>
mostraUsuario(nome);
