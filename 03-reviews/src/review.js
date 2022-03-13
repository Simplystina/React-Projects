import React, {useState} from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Reviews = ()=>{
    const [review, setReview] = useState(reviews[0])
    const [count, setCount] = useState(0)
    
    const prev = ()=>{
        console.log(count)
        if (count>0) {
            setCount(count-1)
            console.log(count)
            setReview(reviews[count])
        }else if(count ===0 ){
            setCount(reviews.length-1)
            console.log(review)
            setReview(reviews[count])
        
        }

    }
    const random = ()=>{
        let randomNumber = Math.floor(Math.random() * reviews.length);
        setCount(randomNumber)
        console.log(randomNumber)
        setReview(reviews[count])
    }
    const next = ()=>{
        
        if(count === reviews.length-1){
            console.log('okay')
            setCount(0)
            setReview(reviews[count])
        }else if(count<reviews.length-1) {
            setCount(count+1)
            setReview(reviews[count])
        }
        console.log(count)
        console.log(count ===reviews.length-1)
    }
    return (
        <>
        <div>
            <div className="img-container">
                <img src={review.image} alt="image"></img>
                <span className='quote-icon'>
                <FaQuoteRight /> </span>
            </div>
            <h4 className="author">{review.name}</h4>
            <h4 className="job">{review.job}</h4>
            <p className="info">{review.text}</p>
            <div className="btns">
                <button className="prevbtn" onClick={prev} ><FaChevronLeft></FaChevronLeft></button>
                <button className="nextbtn" onClick={next}><FaChevronRight></FaChevronRight></button>
            </div>
            <button onClick={random} className="randombtn">surprise me</button>
        </div>
        </>
    )
}
export default Reviews