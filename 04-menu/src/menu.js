import React, {useState} from "react";
import menu from "./data";
console.log(menu[0])
const Item =  (props)=>{
    
    const { title, img, desc, price } = props
    return (
        <>
        <article className="item">
            <div className="img-container">
                <img src={img}></img>
            </div>
            <div className="sub-content">
                <div className="info">
                    <h4>{title}</h4>
                    <h4 className="price">{price}</h4>
                </div>
                <p>{desc}</p>
            </div>
        </article>
        </>
    )
}

export default Item