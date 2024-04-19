import React from "react";
import { Menu } from "./model/restaurant";


interface OwnProps extends Menu{
    showBestMenuName(name:string):string
}

// type OwnProps = Menu & {
// }

const BestMenu:React.FC<OwnProps>=({name, price, category, showBestMenuName})=>{
    return(
        <div>
            <div>BestMenu</div>
            <div>{name}</div>
        </div>
    )
}

export default BestMenu