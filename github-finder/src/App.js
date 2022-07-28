import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {

  // should have only one root element.
  // If root element is not there then we can use <React.Fragment> ...</React.Fragment>
  render(){
    //JSX way
    return (
      <div className="App">
         <h1>Hello from React</h1>
      </div>
    );

    // Javascript way
    // return React.createElement
    // ( 
    //   'div',
    //   {className: 'App'}, 
    //   React.createElement('h1',null,'Hello from React')
    // );
  }
  
}

export default App;
