import "./Mega.css"
import React, { useState } from 'react'

export default props => {
    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return aleatorio;
    }

    function gerarNumero(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                console.log([...nums, novoNumero])
                return [...nums, novoNumero]
            }, []).sort((n1, n2) => n1 - n2)
        //sort comando para ordem crescente ou decresente
        return numeros
    }
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumero(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de Números</label>
                <input min="6" max="8" type="number" value={qtde} onChange={(e) => {
                    setQtde(+e.target.value)
                    setNumeros(gerarNumero(+e.target.value))
                }}></input>
            </div>
            <button className="info" onClick={_ => setNumeros(gerarNumero(qtde))}>Gerar Numeros</button>
        </div >
    )
}