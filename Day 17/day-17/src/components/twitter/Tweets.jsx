import React from 'react';
import Tweet from './Tweet';
 
const Tweets = () => {
    const tweets=[
        {
            id:1,
            name:"Elon Musk",
            twitterhandle:"elonmusk",
            tweet:"Lorem ipsum dolor sit",
            likes:0
        },{
            id:2,
            name:"Jeff Bezos",
            twitterhandle:"jeffbezos",
            tweet:"Lorem ipsum dolor sit",
            likes:0
        },
        {
            id:3,
            name:"Mukesh Ambani",
            twitterhandle:"mukambani",
            tweet:"Lorem ipsum dolor sit",
            likes:0
        },
        {
            id:4,
            name:"Gautam Adani",
            twitterhandle:"gautamadani",
            tweet:"Lorem ipsum dolor sit",
            likes:0
        }
 
    ];
    const renderTweets=()=>{
        return tweets.map(item=>{
            return <Tweet tweet={item}/>
        })
    }
  return (
    <>
     {renderTweets()}
     <h1></h1>
    </>
  )
}
 
export default Tweets
