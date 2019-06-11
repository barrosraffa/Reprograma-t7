import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';

// let contadorNum = 9;

// const nome = {
//     primeiroNome: 'Jessikita',
//     sobreNome: 'Lopes'
// }

// function nomeCompleto(nome){
//     if(nome) {
//         return nome.primeiroNome + ' ' + nome.sobreNome;
//     } else{
//         return 'deconhecida';
//     }
// }
// // function contador(){
// //     if(contadorNum == 0)
// //         return "contador iniciado"
// //     else { 
// //         return "contador nao inicado"
// //     }
// // }

// function verificaNum(contador){
//     if(contador === 0){
//         return <p>contador não iniciado</p>
//     } else {
//         return <p>contador iniciado</p>
//     }
// }

// const template = 
//                 <div className='contador'>
//                     <h1>Count: {contadorNum}</h1> 
//                     <h2>Oi, {nome.primeiroNome}</h2>
//                     <h3>Olá, {nomeCompleto(null)}</h3>
//                      <div>
//                         <button>+1</button>
//                         <button>-1</button>
//                         <button>reset</button>
//                     </div>
//                     {verificaNum(contadorNum)}
//                 </div>

// ReactDOM.render(cards, document.getElementById('root'));

function Comentario(props){
    return (
        <div  className='comentario'>
        <div>
            <img className='comentario__perfil' src={props.imagem}></img>
        </div>
        <div className='texto'>
            <h1 className='comentario__nome'>{props.nome}</h1> 
            <h2 className='comentario__subtitulo'>{props.subtitulo}</h2>
            <hr></hr>
            <p className='mussum_ipsum'>{props.comentario}</p>
        </div>
    </div>
    )
}


// EXEMPLO

// function App (){
//     return (
//     <div>
//             <Comentario
//             imagem="https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
//             nome="Rafona"
//             subtitulo="Ela é legal ela"
//             comentario="Lorem ipsum dolor sit"
//             />
//             <Comentario
//             imagem="http://www.petvale.com.br/imagens/gato_lingua_de_fora.jpg"
//             nome="Vinolia"
//             subtitulo="gatona"
//             comentario="Lorem ipsum dolor sit"
//             />
//     </div>
//     )
// }


class App extends React.Component {
    render(){
        return (
            <div>
               <Comentario
                imagem="https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
                nome="Rafona"
                subtitulo="Ela é legal ela"
                comentario="Lorem ipsum dolor sit"
                />  
                 <Comentario
                imagem="http://www.petvale.com.br/imagens/gato_lingua_de_fora.jpg"
                nome="Vinolia"
                subtitulo="gatona"
                comentario="Lorem ipsum dolor sit"
                />
            </div>
        )
    }
}

ReactDOM.render(< App/>, document.getElementById('root'));
serviceWorker.unregister(); 
