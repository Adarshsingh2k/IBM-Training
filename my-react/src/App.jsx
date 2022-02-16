import React from 'react';
import Left from './components/Left';
import Right from './components/Right';
import './App.css';


const App = () => {
  return (
    <>
    <div className='parent'> 
        <div className='a'>
            <Left ></Left>
        </div>
        <div className='b'>
            <Right ></Right>
        </div>
        

    </div>
   
    
    </>
  )
}

export default App