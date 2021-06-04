import React from 'react'
//**Fragmento <></> ou <React.Fragment></React.Fragment> sem utilizar <div></div> */
export default function Fragmento(props) {
    return (
        //**Fragment posso colocar propriedades */
        <React.Fragment>
            <h1>Fragmento</h1>
            <h3>Cuidado com esse erro !</h3>
        </React.Fragment>
    )
}