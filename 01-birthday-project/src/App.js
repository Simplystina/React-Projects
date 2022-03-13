import React, { useState } from "react";
import data from "./data";
function App(){
  const deleteData = ()=>{
    setPersons([])
    setInfo("No birthdays today")

  }
  const [persons,setPersons ] = useState(data)
    console.log(persons)
    const [info, setInfo ] = useState("Birthday Reminder")
  return(
    <>
    <section>
      <h1>{info}</h1>
      {persons.map((item)=>{
        return(
          <article key={item.id} className="content">
            <img src={item.img}></img>
            <div className="item">
              <h4>{item.name}</h4>
              <span>{item.age} years</span>
            </div>
          </article>
        )
      })}
      <button className="btn" onClick={deleteData}>Clear all</button>
    </section>
    </>
  )
}


export default App