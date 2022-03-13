import React, {useState} from "react";

const Tour= ({id, name, info,image, price, removeContent})=>{
    const [showMore, setShowMore] = useState(false)
    
    const showBtn = ()=>{
      setShowMore(!showMore)  
    }
    
    return(
      <>
      <article className="content">
        <img src={image}></img>
        <div className="tour-content">
            <div className="tour-info">
               <h3>{name}</h3>
               <h4 className="price">${price}</h4>
            </div>
            <p className="info">{showMore? info : info.substr(0,200) +'...'}
            <button className="show-btn"
            onClick={()=>showBtn({info})}>{showMore ? "show less" : "show more"}</button>
            </p>
            
             <button className="content-btn" onClick={()=>removeContent(id)}>Not Interested</button>
        </div>
        
      </article>
      </>
    )
  }
export default Tour