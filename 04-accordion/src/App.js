import React from 'react'
import questions from './data';

import QuestionDisplay from './question';

function App() {
  return (
    <>
    <main>
      <section className='container'>
        <div className='title-box'>
        <h3>Questions And Answers About Login</h3>
        </div>
        <div className='question-box'>
          <QuestionDisplay></QuestionDisplay>
        </div>
      </section>
    </main>
    </>
  );
}


export default App;
