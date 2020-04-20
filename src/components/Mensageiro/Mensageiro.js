import React from 'react';
import './Mensageiro.css'

class Mensageiro extends React.Component {
    state={
        mensagens: [],
        valorUsuario: '',
        valorMensagem: ''
    }

    atualizaMensagens = () => {
        const listaDeMensagens = this.state.mensagens.map((mensagem, index) =>{
            if(mensagem.usuario==="eu"){
                return <div key={index} numero={index} onDoubleClick={this.deletar} className="mensagem-div-eu"><span className="mensagem-eu"><p>{mensagem.texto}</p></span></div>
            }
          return <div key={index} numero={index} onDoubleClick={this.deletar} className="mensagem-div-outros"><span className="mensagem-outros"><h4>{mensagem.usuario}</h4><p>{mensagem.texto}</p></span></div>
        })
        return listaDeMensagens
    }

    deletar = (event) =>{
        if(window.confirm("Quer deletar essa mensagem?")){
            const indice=event.currentTarget.getAttribute('numero')
            const listaDeMensagens = this.state.mensagens;
            listaDeMensagens.splice(indice, 1);
            this.setState({
                mensagens: listaDeMensagens
            })
        }
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
        if(this.state.valorUsuario === "" || this.state.valorMensagem === ""){
            if(this.state.valorUsuario === ""){
                return window.alert("Digite o usuario")
            }
            return window.alert("Digite a mensagem")
        }
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
                    <div className="button" onClick ={this.enviar}>
                    ENVIAR
                    <button></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mensageiro;