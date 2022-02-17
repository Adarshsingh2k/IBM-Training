import React, { useState } from 'react'
// import "./Tweet.css"
 
const Tweet = (props) => {
  let [votes, setvotes] = useState(0)
  const handleLike=()=>{
    setvotes(votes+1);
  }
  const handleDislike=()=>{
    if(votes>0){
    setvotes(votes-1);
 
    }
  }
  console.log(votes)
    console.log(props);
  return (
    <div className='container'>
        <div className="section-one">
            <div className="mainName"><h4>{props.tweet.name}</h4></div>
            <div className="twitterHandle"><h6>{props.tweet.twitterhandle}</h6></div>
        </div>
        <div className="content">{props.tweet.tweet}</div>
        <div className="action">
            <button onClick={handleLike}><i className="fa-solid fa-thumbs-up"></i></button>
            <button onClick={handleDislike}><i className="fa-solid fa-thumbs-down"></i></button>
            <h5><span className="badge bg-secondary">{votes}</span></h5>
        </div>
    </div>
  )
}
 
export default Tweet
