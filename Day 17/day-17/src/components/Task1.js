import React,{useState} from 'react';

const Task1 = () => {

    const [count,setCount]=useState(0);

    const handleClick1=()=>{
        
        setCount(count+1);
    };

    const handleClick2=()=>{
        if (count>0) setCount(count-1);
    };

console.log(count);

  return (
    <>
        <h1>Counter</h1>
        <button onClick={handleClick1}>+</button>
        <h2>{count}</h2>
        <button onClick={handleClick2}>-</button>

    
    </>
  )
}

export default Task1