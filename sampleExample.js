import React , { Component } from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World!</h1>
        <h1>This is a Component</h1>
      </div>
    );
  }
}
ReactDOM.render(
  <MyComponent/>, document.getElementById('root')
);
