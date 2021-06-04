import React from 'react'
import If, { Else } from './If'

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <h3>Seja bem Vindo <strong>{usuario.nome}</strong> !</h3>
                <Else>
                    <h3>Seja bem Vindo <strong>Anonimo</strong> !</h3>
                </Else>
            </If>

        </div>
    )
}