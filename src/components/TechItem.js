import React from 'react'

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
export default TechItem