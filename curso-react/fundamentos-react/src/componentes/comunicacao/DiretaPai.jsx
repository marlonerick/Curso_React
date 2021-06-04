import React from 'react'
import DiretaFilho from './DiretaFilho'
export default props => {
    return (
        <div>
            <DiretaFilho nome="Marlon " idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Nicolas " idade={19} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Souza " idade={17} nerd={false}></DiretaFilho>
        </div>
    )
}