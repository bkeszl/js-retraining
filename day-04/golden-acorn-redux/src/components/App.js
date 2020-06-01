import Navbar from './NavBar.js'


var React = require('react');

function App(props) {
  return(
    <div>
    <Navbar />
      {props.children}
    </div>
  );
}

export default App;
