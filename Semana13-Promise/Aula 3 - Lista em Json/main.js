const listaDeLivros = JSON.stringify(autores)
const listaDeLivrosJs = JSON.parse(listaDeLivros)

const insertRows = bunda => {
  let table = ''
  bunda.forEach((livro) => {
    table+= `
      <tr>
        <td>${livro.livro}</td>
        <td>${livro.autor}</td>
        <td>${livro.genero}</td>
      </tr>
    `
  })
  return table
}



const orderList = (livroA, livroB, propriedade) => {
  if(livroA[propriedade].toLowerCase() < livroB[propriedade].toLowerCase()){
    return -1
  }
  if(livroA[propriedade].toLowerCase() > livroB[propriedade].toLowerCase()){
    return 1
  }
  return 0
}

const ordenarLivro = document.getElementById("ordenar-livro")
const ordenarAutor = document.getElementById("ordenar-autor")
const ordenarGenero = document.getElementById("ordenar-genero")

ordenarLivro.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => orderList(livroA, livroB, "livro"))
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

ordenarAutor.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => orderList(livroA, livroB, "autor"))
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

ordenarGenero.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => orderList(livroA, livroB, "genero"))
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

document.getElementById("table-section").innerHTML = insertRows(listaDeLivrosJs.livros)

// let listaDeLivros = JSON.stringify(autores)
// let listaDeLivrosJs = JSON.parse(listaDeLivros)

// let insertRows = batata => {
//     let table = ' '
//     batata.forEach((livro) => {
//         table+= `
//             <tr>
//                 <th>${livro.livro}</th>
//                 <th>${livro.autor}</th>
//                 <th>${livro.genero}</th>
//             </tr>
//         `
//     });
//     return table

// }

  
//     let ordenarLivro = document.getElementById('ordernar_livro')

//     ordenarLivro.addEventListener('click', (e) => {
//         let listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
//             if(livroA.livro.toLowerCase() < livroB.livro.toLowerCase()){
//                 return -1
//             }
//             if(livroA.livro.toLowerCase() > livroB.livro.toLowerCase()){
//                 return 1
//             }
//             return 0
//         })
//         document.getElementById('table_section').innerHTML = insertRows(listaOrdenada.livros)
//     })

//     document.getElementById('table_section').innerHTML = insertRows(listaDeLivrosJs.livros)

