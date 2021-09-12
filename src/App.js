import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}

export default App;

