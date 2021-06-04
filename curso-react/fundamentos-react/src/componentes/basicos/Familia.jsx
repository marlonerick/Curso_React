import React, { cloneElement } from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    console.log(typeof props.children.map)
    return (
        <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i })
                })
            }
        </div>
        /*
        <div>
            <FamiliaMembro nome="Marlon" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Nicolas" {...props} />
            <FamiliaMembro nome="Marinez" sobrenome="Silva" />
        </div>
        */
    )
}