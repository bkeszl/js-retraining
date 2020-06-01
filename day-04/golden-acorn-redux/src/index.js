
import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';
import BuyAcorn from './components/buy-acorn.js';
import EatAcorn from './components/eat-acorn.js';
import DisplayAcorn from './components/display-container.js';
import SimpleGoldenAcornApp from './components/GoldenAcornNoRedux.js';
import ReduxGoldenAcornApp from './components/ReduxGoldenAcornApp.js';
import App from './components/App.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

var React = require('react');
var ReactDOM = require('react-dom');


let store = createStore(rootReducer, {counter:0}
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/redux">
          <Provider store = {store}>
            <ReduxGoldenAcornApp />
          </Provider>
        </Route>
        <Route path="/simple">
          <SimpleGoldenAcornApp />
        </Route>
        <Route path="/">
          <h1>Golden Acorn is life</h1>
        </Route>
      </Switch>
    </App>
  </Router>
  ,document.getElementById('root')
);
