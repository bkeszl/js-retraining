var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }

  render() {
    const counter = this.state.counter;
    return(
      <div>
      <button onClick={ () => {/*TODO*/}}>-</button>
        <p>{counter}</p>
      <button onClick={ () => {/*TODO*/}}>+</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
