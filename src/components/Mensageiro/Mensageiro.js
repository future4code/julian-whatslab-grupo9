import React from 'react';
import './Mensageiro.css'

class Mensageiro extends React.Component {
    state={
        mensagens: [],
        valorUsuario: "",
        valorMensagem: ""
    }

    onChangeUsuario = (event) => {
		this.setState({
			valorUsuario: event.target.value
		})
	}

    onChangeMensagem = (event) => {
		this.setState({
			valorMensagem: event.target.value
		})
    }

    enviar = () => {
        const listaDeMensagens = this.state.mensagens;
        const mensagem = {
            usuario: this.state.valorUsuario,
            texto: this.state.valorMensagem
        }
        listaDeMensagens.push(mensagem)
        this.setState({
            mensagens: listaDeMensagens, 
            valorMensagem: ''
        })
    }
    
    enviaComEnter = (event) => {
        if(event.key==="Enter"){
            this.enviar();
        }
    }

    atualizaMensagens = () => {
        const listaDeMensagens = this.state.mensagens.map(mensagem =>{
                return <div><h4>{mensagem.usuario}: </h4><p>{mensagem.texto}</p></div>
            
        })
        return listaDeMensagens;
    }
    
    render(){
        const listaAtualizada = this.atualizaMensagens();
        return (
            <div className="container">
                <div className="container-mensagens">
                    {listaAtualizada}
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