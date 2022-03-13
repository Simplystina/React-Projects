import React, {useState, useEffect} from 'react'
import questions from './data'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const QuestionDisplay = ()=>{

    return (
        <>
            {questions.map((question)=>{
                
                return( 
                    <SingleQuestion key={question.id} question={question}></SingleQuestion>
                )
            })}


        </>
    )
  
}
const SingleQuestion = ({question})=>{
    const [showText, setShowText] = useState(false)
    const [text, setText] = useState('')
    const showMore = (id,e)=>{
        if (parseInt(e.currentTarget.id)===id) {
            console.log(id, parseInt(e.currentTarget.id))
            setShowText(!showText)
        }
        
    }

    return(
        <>
        <div className='content'>
                    <div className='info'>
                    <h4>{question.title}</h4>
                    <button id={question.id} onClick={(e)=>showMore(question.id,e)} className='btn'>{<AiOutlinePlus></AiOutlinePlus>}</button>
                    </div>
                    <article>
                    {showText && question.info }
                    
                    </article>
                </div>
        </>
    )
}
export default QuestionDisplay