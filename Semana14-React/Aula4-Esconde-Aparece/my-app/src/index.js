import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class EscondeMostra extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visibilidade: true
        }
    }

    change = () => {
        if(this.state.visibilidade === true){
            this.setState(() => {
                return {
                    visibilidade: false
                }
            })
        } else {
            this.setState(() => {
                return {
                    visibilidade: true
                }
            })
        }

    }


    mudarVisibilidade = () => {
        this.setState((estadoAnterior) => {
            return {
                visibilidade: !estadoAnterior.visibilidade
            }
        })
    }
    render(){
        return(
            <div className='container'>
                <h1>Esconde-Aparece</h1>
                <button onClick={this.mudarVisibilidade}> 

                {this.state.visibilidade ? 'Esconder Detalhes' : 'Mostrar detalhes'}
               </button>
                <p>{this.state.visibilidade ? 'vocês são maravilhosas' : ''}</p>
            </div>
        )
    }
}
ReactDOM.render(<EscondeMostra />, document.getElementById('root'));
serviceWorker.unregister();
