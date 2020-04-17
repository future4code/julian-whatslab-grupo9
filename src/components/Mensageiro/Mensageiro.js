import React from 'react';
import './Mensageiro.css'

class Mensageiro extends React.Component {
    state={
        valorUsuario: "",
        valorMensagem: ""
    }

    render(){
    return (
        <div className="container">
            <div className="container-mensagens">
            </div>
            <div className="grid-input">
                <input
                    className={'input-usuario'}
                    placeholder={'Usuário'}
                    value={this.state.valorUsuario}
                    onChange={this.onChangeUsuario}
                />
                <input
                    className={'input-mensagem'}
                    placeholder={'Mensagem'}
                    value={this.state.valorMensagem}
                    onChange={this.onChangeMensagem}
                    onKeyDown={this.enviaComEnter}
                />
                <button onClick={this.enviar}>Enviar</button>
            </div>
        </div>
    )
    }
}

export default Mensageiro;