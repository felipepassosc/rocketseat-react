import React, { Component } from 'react'

class TechList extends Component {
    state = {
        newTech: '',

        techs: [
            'Nodejs', 'ReactJS'
        ]
    }

    //Arrow function para acessar o this
    handleInputChange = e => {
        // estados são imutaveis, por isso se usa setstate
        this.setState({
            newTech: e.target.value
        })
    }

    handleSubmit = e => {
        // Para não carregar a página
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.techs.map(tech => <li key={tech}> {tech} </li>)}
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