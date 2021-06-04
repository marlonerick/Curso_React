import React from 'react'
//**Componente com parametro params ou props utilizar props sempre */
export default function ComParametro(props) {
    const status = props.media >= 6 ? 'Aprovado' : 'Reprovado'
    /** Trabalhar com inteiros */
    const mediaInt = Math.ceil(props.media)
    return (
        <>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <p>
                <strong>{props.nome} </strong>
                tem a media
                <strong> {mediaInt} </strong>
                e está
                <strong> {status} </strong>
            </p>
        </>
    )
}