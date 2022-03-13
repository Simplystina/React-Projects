import {Link} from 'react-router-dom'
 import React, {useState, useEffect, useRef} from 'react'
import Loading from './loading'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const Cocktail =()=>{
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    const [loading, setloading] = useState(true)
    const [noValue, setnovalue] = useState(false)
    const inputEl = useRef(null)
    
    async function getCockails() {
        const response = await fetch (url)
        const resp = await response.json()
       console.log(resp.drinks)
        setData(resp.drinks)
        setloading(false)
    }
    useEffect(()=>{
        getCockails()
    },[])

    async function filtered (searchkey){
        
        try {
            const response = await fetch(`${url}${searchkey}`)
            const resp = await response.json()
            console.log(resp.drinks)
            if(resp.drinks){
                setData(resp.drinks)
                setnovalue(false)
            } else{
                setnovalue(true)
               
            }
            setloading(false)
        } catch (error) {
            
            console.log("Something went wrong")
            console.error(error)
        }
    }
    const searchValue = (e)=>{
        setloading(true)
        inputEl.current = e.currentTarget.value
        setValue(e.currentTarget.value)
        filtered(inputEl.current)
       
    }
    const submit = (e)=>{
        e.preventDefault()
    }
    const refreshSubmit = ()=>{
        setloading(true)
        getCockails()
        setnovalue(false)
        setValue('')
    }

    if(loading){
        return  (<>
            <div className="search-form">
                <form className="form-control" onSubmit={submit}>
                    <label>Search your favourite cocktail</label>
                    <input
                    ref={inputEl}
                    type='text'
                    name="name"
                    id='name'
                    onChange={searchValue}
                    ></input>
                    <button onClick={refreshSubmit} className='btn-primary refresh-btn'>Refresh</button>
                </form>
            </div>
            <Loading></Loading>
        </> )
    }
    if(noValue){
        return (<>
            <div className="search-form">
                <form className="form-control" onSubmit={submit}>
                    <label>Search your favourite cocktail</label>
                    <input
                    ref={inputEl}
                    type='text'
                    name="name"
                    id='name'
                    value={value}
                    onChange={searchValue}
                    ></input>
                    <button onClick={refreshSubmit} className='btn-primary refresh-btn'>Refresh</button>
                </form>
            </div>
        <h2 className='section-title-notice'>No cocktails matched your search query</h2>
        </>)
    }
    
    return (
        <>
        <div className="search-form">
                <form className="form-control" onSubmit={submit}>
                    <label>Search your favourite cocktail</label>
                    <input
                    ref={inputEl}
                    type='text'
                    name="name"
                    id='name'
                    value={value}
                    onChange={searchValue}
                    onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                    ></input>
                    <button onClick={refreshSubmit} className='btn-primary refresh-btn'>Refresh</button>
                </form>
            </div>
        <h2 className='section-title'>cocktails</h2>
        <section className='section'>
            {data.map((cocktail)=>{
                const {idDrink,strDrink,strAlcoholic,strCategory,strGlass, strDrinkThumb} = cocktail
                return (

                    <article className='cocktail' key={idDrink}>
                        <div className='img-container'>
                            <img src={strDrinkThumb}></img>
                        </div>
                        <div className='cocktail-footer'>
                            <h3>{strDrink}</h3>
                            <h4>{strGlass}</h4>
                            <p>{strAlcoholic}</p>
                            <Link to={`/cocktail/${idDrink}/`} className='btn btn-primary'>details</Link>
                        </div> 
                    </article>
                )
            })}
        </section>
        </>
    )
}

export default Cocktail