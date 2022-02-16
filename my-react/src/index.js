import react from "react";
import reactDom from "react-dom";
import App from "./App";

// const newArr = [1, 2, 3, 4, 5];
// const check = (num) => {
//   if (num % 2 === 0) return 'even';
//   else return 'odd';
// };
const Out = () => {
  return (
    <>
      {/* <h1>{check(10)}</h1>
      <hr></hr>
      <h1>Task 2-> iterate elements in an array</h1>
      <h3>All the elements of arraya are {newArr.map(i=>{return `${i},`})}10</h3> */}
      <App />
    </>
  )
}

reactDom.render(<Out />, document.getElementById("root"));