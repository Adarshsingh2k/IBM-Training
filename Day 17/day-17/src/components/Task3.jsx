import React from 'react';
import './Task3.css';

const Task3 = (props) => {
  return (

    <>
        <div className='container'>
            <div className='one' >
                <h5>{props.head} </h5>
                <div className='one-1'>
                    <h4>{props.num} </h4>
                   <h5 style={{color:props.pert[0]=='+'?'green':'red'}} >{props.pert} %</h5>
                </div>
                
            </div>

            <div className='two'>
                <img src={props.logo}></img>
            </div>
        </div>
    
    </>
    
    
  )
}

export default Task3