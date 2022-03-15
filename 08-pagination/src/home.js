import react, {useState, useEffect} from "react";
import { useFetch } from "./useFetch";


const Pages =()=>{
    const pageNumbers = []
    for (let i = 1; i <= 10; i++) {
        const element = i;
        pageNumbers.push(i)
        
    }
    const {loading, data} = useFetch()
   //console.log(pageNumbers)
   const [users, setUsers] = useState(data)
   const [currentbtn, setCurrentbtn] = useState(1)

   useEffect(()=>{
       setUsers(data.slice(0,10))

   },[data])
    if(loading){
        return(<div className="loading">
            <h2>Loading.......</h2>
        </div>)
    }
    //console.log(users)
    if(data.length>0 && !loading){
        //console.log(document.querySelectorAll('.btn'))
        //console.log(users)
        const changeStyles = () => {
            let element = document.querySelectorAll('.btn')
            for (let i = 0; i < element.length; i++) {
                element[i].classList.remove("clicked");
                
            }

        }
        const clickMe = (page, e)=>{
            changeStyles()
            const a = page*10
            setUsers(data.slice(a-10, a))
            //console.log(page)
            
            e.target.classList.add("clicked")
            console.log(page)
            console.log(e.target)
            setCurrentbtn(page)
        }
        const next = ()=>{
            console.log("**************************")
            console.log("currentbtn next",currentbtn)
            if (currentbtn<10) {
                changeStyles()
                const a = (currentbtn+1) * 10
                setUsers(data.slice(a-10,a))
                const checked = document.querySelectorAll('.btn')[currentbtn]
                
                checked.classList.add('clicked')
                console.log(checked)
                //console.log(a)
                console.log(currentbtn, "currentbtn")
                setCurrentbtn(currentbtn+1)
            }
            
        }
        const prev = ()=>{
            if (currentbtn>1) {
                console.log("current Prev", currentbtn)
                changeStyles()
                const a = (currentbtn-1) * 10
                setUsers(data.slice(a-10,a))
                const checked = document.querySelectorAll('.btn')[currentbtn-2]
                console.log(document.querySelectorAll('.btn'))
                console.log("checked before",checked)
                checked.classList.add('clicked')
                console.log("checked after",checked)
                setCurrentbtn(currentbtn-1)
            }
            
        }
        
        
        
        return (
        <>
            <section>
                <div className="title">
                    <h2>Pagination</h2>
                    <h1 className="underline"></h1>
                </div>
               <article className="page-section">
                {users.map((page)=>{
                    const {id, html_url,login, avatar_url} = page
                    return(<>
                     <article key={id} className="user">
                       <img src={avatar_url}></img>
                        <h4 className="author">{login}</h4>
                         <a className="link-details" target="_blank" href={html_url}>View Profile</a>
                      </article>
                       </>)
                 })}
               </article>
               <div className="pagebtns">
                   <span onClick={prev} className="prev">Prev</span>
                    {pageNumbers.map((page,index)=>{
                        
                    return (<button key={index} onClick={(e)=>clickMe(page,e)} className={index===0 ? "btn clicked" : "btn"}>{index+1}</button>)
                    })}
                    <span onClick={next} className="next">Next</span>
                </div>
           </section>
    </>
   )}


   return <h2>404 error</h2>
}

export default Pages