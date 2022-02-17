import React,{useState} from 'react'
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import './App.css';
import Tweets from './components/twitter/Tweets';

const App = () => {
    const [count,setCount]=useState(0);
    const [count2,setNew]=useState({count1:0,
        count3:6});
    const handleClick=()=>{
        setCount(count+1);
    };
    const inc=()=>{
        setNew({...count2,count1:count2.count1+1});
    };
    const dec=()=>{
        setNew({...count2,count3:count2.count3-5});
    };
    console.log(count2);
  return (
    <>
        <h1>{count}</h1>
        <button onClick={handleClick}>Kick</button>
        <hr></hr>
        <h1>Task 1 Counter App</h1>
        <h1>{count2.count1}</h1>
        <button onClick={inc}>Kick1</button>
        <h1>{count2.count3}</h1>
        <button onClick={dec}>Kick2</button>
        <hr></hr>
        <Task1></Task1>
        <hr></hr>
        <Task2></Task2>
        <hr/>
        <h1>Task 3: props</h1>
        <br></br>
        <div className='parCont'>
            <Task3 head="Todays Money" num="$53,000" pert="+2.55" logo="https://img.icons8.com/doodle/2x/money.png"></Task3>
        <Task3 head="Todays Money" num="$53,000" pert="+2.55" logo="https://img.icons8.com/doodle/2x/money.png"></Task3>
        <Task3 head="Todays Money" num="$53,000" pert="-2.55" logo="https://img.icons8.com/doodle/2x/money.png"></Task3>
    
        <Task3 head="Todays Money" num="$53,000" pert="+2.55" logo="https://img.icons8.com/doodle/2x/money.png"></Task3>
    
    
        </div>

        <Tweets></Tweets>
        
    </>
  )
}

export default App