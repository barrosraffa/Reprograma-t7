import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';

let cont = 0;


class Contador extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numContador: 0
        }
    }
    addUm = () => {
        this.setState((estadoInicial) => {
            return {
                numContador: estadoInicial.numContador + 1
            }
        })
    }
    subtraiUm = () => {
        this.setState((estadoInicial) => {
            return {
                numContador: estadoInicial.numContador - 1
            }
        })
    }
    reset = () => {
        this.setState(() => {
            return {
                numContador: 0
            }
        })
    }
    render (){
        return(
            <div>
                <h2>Count: {this.state.numContador}</h2>
                <button onClick={this.addUm}>+1</button>
                <button onClick={this.subtraiUm}>-1</button>
                <button onClick={this.reset}>Reset</button>
                <p>{this.state.numContador !== 0 ? 'Contador inciado':'Contador não iniciado'}</p>
            </div>
        )
    }
}
ReactDOM.render(<Contador />, document.getElementById('root'));

// function Comentario(props){ 
//     return (
//         <div  className='comentario'>
//         <div>
//             <img className='comentario__perfil' src={props.imagem}></img>
//         </div>
//         <div className='texto'>
//             <h1 className='comentario__nome'>{props.nome}</h1> 
//             <h2 className='comentario__subtitulo'>{props.subtitulo}</h2>
//             <hr></hr>
//             <p className='mussum_ipsum'>{props.comentario}</p>
//         </div>
//     </div>
//     )
// }

// class App extends React.Component  {
//     render(){
//         return (
//             <div>
//                <Comentario
//                 imagem="https://t2.ea.ltmcdn.com/pt/images/0/2/5/img_remedio_caseiro_para_acalmar_gato_22520_600.jpg"
//                 nome="Rafona"
//                 subtitulo="Ela é legal ela"
//                 comentario="Lorem ipsum dolor sit"
//                 />  
//                  <Comentario
//                 imagem="http://www.petvale.com.br/imagens/gato_lingua_de_fora.jpg"
//                 nome="Vinolia"
//                 subtitulo="gatona"
//                 comentario="Lorem ipsum dolor sit"
//                 />
//             </div>
//         )
//     }
// }

// ReactDOM.render(< App/>, document.getElementById('root'));
serviceWorker.unregister(); 
