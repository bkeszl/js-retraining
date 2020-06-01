import Button from './Button.js';
import Display from './Display.js';

var React = require('react');

class SimpleGoldenAcornApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
  }

  createAcorn(){
    const acornCount = this.state.counter;
    this.setState(
      {
        counter: acornCount + 1
      }
    )
  }

  eatAcorn(){
    const acornCount = this.state.counter;
    if (this.state.counter === 0) {
      return;
    }
    this.setState(
      {
        counter: acornCount - 1
      }
    )
  }

  render() {
    return(
      <div>
      <Button onClick={this.createAcorn.bind(this)} value="+" />
        <Display>
          {this.state.counter}
        </Display>
      <Button onClick={this.eatAcorn.bind(this)} value="-" />
      </div>
    );
  }
}

export default SimpleGoldenAcornApp;
