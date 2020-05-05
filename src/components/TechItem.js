import React from 'react'

function TechItem() {
    return (
        <li> {tech}
            <button onClick={() => this.handleDelete(tech)} type="button">Remover</button>
        </li>
    )
}

export default TechItem