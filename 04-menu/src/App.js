import React, { useState } from 'react'
import menu from './data';
import Item from './menu'
let btns = menu.map((item)=>{
  return item.category
})
btns = new Set(btns)
btns = [...btns]
btns.unshift('all')
console.log(btns)

function App() {

  
const [menus, setMenus] = useState(menu)
const filterbtn = (category)=>{
  
  const filteredbtn = menu.filter((item)=>{
    return item.category === category
  })
  if(filteredbtn.length!=0){
    setMenus(filteredbtn)
  }
  console.log(filteredbtn)
}

  return (
    <>
    <main>
      <div className="title">
        <h2 className="tours-heading">Our Menu</h2>
        <h1 className="underline"></h1>
        <div>
          {btns.map((btn,index)=>{
            return <button onClick={()=>filterbtn(btn)} key={index} className='btn'>{btn}</button>
          })
          }
        </div>
        <div className='content'>
        {
          
          menus.map((item)=>{
            {console.log(item)}
            return <Item key={item.id} {...item}></Item>
          })
        }
        </div>
        
    </div>
    </main>
    </>
  );
}

export default App;
