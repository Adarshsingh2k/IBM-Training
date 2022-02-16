import React, { useState } from 'react';


const Task2 = () => {

    const [count,setCount]=useState({
        even:2,
        odd:1
    });
    
    const clicked=(parVal)=>{
        if(parVal%2===0){
            setCount({...count,even:count.even+2});
        }
        else setCount({...count,odd:count.odd+1})
    }
    
  return (
<>
<button onClick={()=>clicked(Math.random())}>Lets Play</button>
    <h3>{count.even}</h3> <h3> </h3> <h3>{count.odd}</h3>
</>
    
  )
}

export default Task2