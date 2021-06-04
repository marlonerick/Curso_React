import React from 'react'

export default props => {
    var min = props.min;
    var max = props.max;
    //**Formas de pegar o max e min */
    //const { min, max } = props
    const aletorio = parseInt(Math.random() * (max - min + 1)) + min;
    return (
        <div>
            <h2>Valor Aletório</h2>
            <p>
                <strong>Valor Mínimo:</strong>{min}
            </p>
            <p>
                <strong>Valor Máximo:</strong>{max}
            </p>
            <p>
                <strong>Valor Aleatório:</strong>{aletorio}
            </p>
        </div>
    )
}

//**Exercicio Feito por mim  */
/*
export default function getRandomIntInclusive(props) {
    var min = Math.ceil(props.min);
    var max = Math.floor(props.max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
*/