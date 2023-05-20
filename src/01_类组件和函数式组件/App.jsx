import React from "react";
import HelloWorldClass from './Components/HelloWorld.jsx';
import HelloWorldFunc from './Components/HelloWorldFunc.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>haha</h2>
        <HelloWorldClass />
        <HelloWorldFunc />
      </div>
    )
  }
}

export default App;