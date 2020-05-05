import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList extends Component {
    // static defaultprops, se quisermos colocar defaultprops aqui
    state = {
        newTech: '',

        techs: []
    }
    // executado assim que o componente aparece em tela
    componentDidMount(){
        const techs = localStorage.getItem('techs')

        if (techs) {
            this.setState({ techs: JSON.parse(techs) })
        }
    }
    // executado sempre que houver alterações nas props ou estado
    componentDidUpdate(prevProps, prevState){
        // this.props, this.state para acessar
        // componentDidUpdate recebe os estados e props antigo

        // Se o estado antigo for diferente do novo, aramazena no localStorage (quando houver alterações)
        if (prevState !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))// Como não aceita arrays, transforma em JSON 
        }
        // localStorage banco de dados do browser
    }
    // executado quando componente deixa de existir
    componentWillMount(){

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
    // Quando criamos um componente as funções para manipular o estado precisando ficar no mesmo componente que o estado está
    // handleDelete por exemplo precisa ficar no mesmo estado que tech
    // passamos como props para TechItem que recebe como paramatro pra poder usar em seu componente
    handleDelete = tech => {
        this.setState({
            techs: this.state.techs.filter(tec => tec !== tech)
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
                        <TechItem
                            key={tech}
                            tech={tech}
                            onDelete={() => this.handleDelete(tech)}
                        />
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