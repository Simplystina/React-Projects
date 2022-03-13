import React, {useState, useEffect} from "react";
import reviews from "./data";
import Reviews from "./review";
function App() {
  return (
    <>
    <main>
    <div className="title">
        <h2 className="tours-heading">Our Reviews</h2>
        <h1 className="underline"></h1>
    </div>
    <section className="section">
      <Reviews></Reviews>
    </section>

    </main>
    
    </>
    
    
  )
}

export default App;
