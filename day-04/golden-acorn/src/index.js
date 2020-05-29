import PropTypes from 'prop-types';

var React = require('react');
var ReactDOM = require('react-dom');

function Button(props) {
  return (
    <button onClick={props.function}>
      {props.textString}
    </button>
  );
}

Button.propTypes = {
  function: PropTypes.func,
  textString: PropTypes.string
}

function Display(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

Display.propTypes = {
  children: PropTypes.number
}

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
      <Button function={this.createAcorn.bind(this)} textString="+" />
      <Display>
        {this.state.counter}
      </Display>
      <Button function={this.eatAcorn.bind(this)} textString="-" />
      </div>
    );
  }
}

ReactDOM.render(
  <SimpleGoldenAcornApp />,
  document.getElementById('root')
);
