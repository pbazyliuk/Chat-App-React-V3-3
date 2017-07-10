// Libs

//@flow
import React, { Component } from "react";



  class App extends React.Component {
  
  handle(n: number): string {
    return n + '';
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>hello it's me - a react starter app file!!!</h1>
      </div>
    );
  }
};


export default App;