import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList extends Component {
    state = {
        newTech: '',

        techs: [
            'Nodejs', 'ReactJS'
        ]
    }

    //Arrow function para acessar o this
    handleInputChange = e => {
        // estados são imutaveis, por isso se usa setstate, não se altera diretamente, setstate cria um novo estado
        this.setState({
            newTech: e.target.value
        })
    }

    handleSubmit = e => {
        // Para não carregar a página
        e.preventDefault()

        // É NECESSARIO RECRIAR O ARRAY DO ZERO
        this.setState({
            techs: [...this.state.techs, this.state.newTech], // ... spread operator pra copiar tudo que já tinha no array
            newTech: ''
        })
    }

    handleDelete = tech => {
        this.setState({
            techs: this.state.techs.filter(tec => tec !== tech )
        })
    }

    // () => usando quando queremos passar algo como parametro na hora de chamar a função, mas não queremos executar
    // Key necessita ficar na listagem
    // PROPS : Tech vai ser passado como propriedade para poder ser usado em "techitem"
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => (
                        <TechItem key={tech} tech={ tech }/>
                    ))}
                </ul>
                <input type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newTech}
                />
                <button type="submit"> Enviar</button>
            </form>
        )
    }
}


export default TechList