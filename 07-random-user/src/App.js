import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {

  const [person, setPerson] = useState({})
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState({
                           title: 'My name is',
                           value: 'Random Person'})

   const getPerson= async ()=>{
     setLoading(true)
     const response = await fetch(url)
     const persons = await response.json(response)
     let info = persons.results[0]
     //console.log(info)
     let name = info.name.first + ' '+ info.name.last
     //console.log(info.name)
     let age = info.dob.age
     let phoneno = info.phone
     let image = info.picture.large
     let email = info.email
     let password = info.login.password
     let street =  info.location.street.number + ' ' + info.location.street.name 
     //console.log(street)
     setTitle({title:`My name is`, value: name})
     const personInfo = {
      name, age, phoneno, image, email, password, street}
      setPerson(personInfo)
      setLoading(false)
   }
    
   useEffect(()=>{
     getPerson()
   },[])
   const {name, age, phoneno, image, email, password, street} = person

    const randomUser =()=>{
      getPerson()
    }
    const changeValue = (e)=>{
      let id  = e.currentTarget.classList.contains("icon")
      console.log(id)
      if (id) {
        console.log(e.currentTarget.dataset)
        const newValue = e.currentTarget.dataset.id
        const a = person[newValue]
        setTitle({title:`My ${newValue} is`, value: a})
        console.log(title)
      }
    }
     return (
        <>
        <section className="container">
          <img src={image}></img>
          <p className='author'>{title.title}</p>
          <p className='author-info'>{title.value}</p>
          <div className='btn-container'>
            <button className='icon' data-id="name" onMouseOver={changeValue}><FaUser></FaUser></button>
            <button className='icon' data-id='email' onMouseOver={changeValue}><FaEnvelopeOpen></FaEnvelopeOpen></button>
            <button className='icon' data-id='age' onMouseOver={changeValue}><FaCalendarTimes></FaCalendarTimes></button>
            <button className='icon' data-id='street' onMouseOver={changeValue}><FaMap></FaMap></button>
            <button className='icon' data-id='phoneno' onMouseOver={changeValue}><FaPhone></FaPhone></button>
            <button className='icon' data-id='password' onMouseOver={changeValue}><FaLock></FaLock></button>
          </div>
          <button onClick={randomUser} className='random-user'>{loading? 'loading...' : 'random user'}</button>
        </section>
       </>
      );
   
}
export default App;
