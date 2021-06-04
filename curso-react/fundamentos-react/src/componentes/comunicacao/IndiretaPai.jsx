import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    /*Nome, Idade, Nerd */
    const [a, b] = [1, 2]
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
        //console.log(nomeParam, idadeParam, nerdParam)
    }

    return (
        < div >
            <span>Nome : {nome} </span>
            <span>Idade :<strong> {idade} </strong></span>
            <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
            <div>Pai</div>
            <IndiretaFilho click={fornecerInformacoes}></IndiretaFilho>
        </div >
    )
}