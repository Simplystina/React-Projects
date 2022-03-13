import React, {useState, useEffect} from "react";
import Tour from "./tours";
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchTours = async ()=>{
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchTours()
  },[])

  const removeContent = (id)=>{
    const filteredTours = tours.filter((tour)=>{
      return tour.id !== id})
     
      setTours(filteredTours)
  }
  if (loading) {
    return(
      <>
      <section className="section">
        <Loading className="title"></Loading>
      </section>
      </>
    )
    
  }
  if (tours.length===0) {
    const refresh = ()=>{
      setLoading(true)
      return fetchTours()
       
     }
    return(
      <>
      <section className="section">
      <div className="title">
        
        <h2 className="empty-tours">No more tours</h2>
      <button className="btn" onClick={refresh}>Refresh</button>
      </div>
      </section>
      
      </>
    )
  }
  
  
  return (
    <section className="section">
      <div className="App">
      <div className="title">
        <h2 className="tours-heading">Our Tours</h2>
        <h1 className="underline"></h1>
      </div>
      <div>
        {tours.map((tour)=>{
          return <Tour key={tour.id} 
          name={tour.name}
          price={tour.price}
          image={tour.image}
          info ={tour.info}
          id ={tour.id}
          removeContent={removeContent}
          ></Tour>
          
        })}
        
      </div>
    </div>
    </section>
    
  );
  }
  const Loading = ()=>{
    return (
      <>
      <div className="section loading">
        <h2>Loading...........</h2>
      </div>
      </>
    )
  }

  
export default App;
