import React from 'react'

export default props => {
    const max = 30
    const min = 70
    const geraIdade = () => (parseInt(Math.random() * (max - min + 1)) + min)
    const gerarNerd = (Math.random() > 0.5)
    return (
        <div>
            <div>Filho</div>
            <button onClick={function (e) { props.click('João', geraIdade(), gerarNerd) }}>Fornecer Informações</button>
        </div>
    )
}