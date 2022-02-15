import React,{Component} from "react";
import reactDom from "react-dom";
class Greet  extends React.Component{
  render(){
    return <h1>Hello</h1>;
  }
}
reactDom.render(<Greet/>,document.getElementById('root'));