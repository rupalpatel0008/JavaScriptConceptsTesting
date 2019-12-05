import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function testNullCheck() {

  let x = ""
  if (x) 
    console.log('x is not null')
  else
    console.log('x is null')
  x = undefined
  if (x)
    console.log('x is not undefined')
  else
    console.log('x is undefined')
}
function App() {
  return (
    <div className="App">
      <h1>Hello There</h1>
      <h2>I use this sandbox to experiment some conepts in javascript.</h2>
      <button type="button" onClick={testNullCheck()}>Click Me to check null!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
