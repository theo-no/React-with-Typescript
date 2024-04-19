import React from 'react'
import { Address, Restaurant } from './model/restaurant'

interface OwnProps {
    info: Restaurant,
    changeAddress(address:Address): void
}

const Store:React.FC<OwnProps> = ({info}) => {
    return(
        <div>
            <div>Store</div>
            <div>{info.name}</div>
        </div>
    )
}

export default Store