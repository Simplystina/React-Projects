import React, {useState, useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import Loading from './loading'
const url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`

const SingleCocktail = ()=>{

    const [data,setData] = useState([])
    const [loading, setloading] = useState(true)
    const {id} = useParams()
    async function getCockail() {
        const response = await fetch(`${url}${id}`)
        const resp = await response.json()
        //console.log(resp.drinks)
        setData(resp.drinks)
        setloading(false)
    }

    useEffect(()=>{
        getCockail()
    },[])
    
    if(loading){
        return(
            <Loading></Loading>
        )
    }
    
     
    if (data[0]){
        const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
    
   
     console.log(newCocktail,ingredients)
    return (
        <>
        <article className='section-drink'>
            <Link to='/' className='btn btn-primary backbtn'>Back Home</Link>
            <h1 className='drink-name'>{name}</h1>
            <div className='each-drink'>
                <img src={image}></img>
                
                <div className='drink-info'>
                    <p>
                        <span className='drink-data'>name :</span> {name}
                    </p>
                    <p>
                        <span className='drink-data'>category :</span> {category}
                    </p>
                    <p>
                        <span className='drink-data'>info :</span> {info}
                    </p>
                    <p>
                        <span className='drink-data'>glass :</span> {glass}
                    </p>
                    <p>
                        <span className='drink-data'>instructons :</span> {instructions}
                    </p>
                    <p>
                        <span className='drink-data'>ingredients: </span>
                        {ingredients.map((item, index) => {
                        return item ? <span key={index}> {item}</span> : null
                         })}
                    </p>
                </div>
                
            </div>
        </article>
        </>)
    }else{
        return null
    }
}
export default SingleCocktail