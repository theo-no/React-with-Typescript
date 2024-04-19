import React from "react";


function Box(props){

    const clickMe=()=>{
        alert("click")
    }

    return(
        <div className='box'> 
            {props.num}번째 박스 
            {props.name}
            <button onClick={
                clickMe
            }>개봉</button>
        </div>
    )
}

export default Box