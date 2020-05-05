import React from 'react'
import Proptypes from 'prop-types'

// recebendo as propriedades como parametro, poderia ser props.tech mas estamos usando desestrurção
function TechItem({ tech, onDelete }) {
    return (
        <li> {tech}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    )
}

// Defautprops, usado quando não for informado, fica com default
TechItem.defaultProps = {
    tech: 'Oculto'
}
// Proptypes, lidar com o tipo da propriedade, validar as propriedades que nosso componente recebe
TechItem.Proptypes = {
    tech: Proptypes.string,
    onDelete: Proptypes.func.isRequired
}
// tipo string e obrigatória

export default TechItem