import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  componentDidMount(){
    setTimeout(()=>{ alert("Hello"); }, 2000);
  }
  componentWillUnmount(){
    setTimeout(()=>{ alert("bye"); }, 2000);
  }
  
  render(){
  return (<div></div>)
  }

  render(){

     return <></>
    
  }
 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

    
  

