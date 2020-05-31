
import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';
import BuyAcorn from './components/buy-acorn.js'
import EatAcorn from './components/eat-acorn.js'
import DisplayAcorn from './components/display-container.js'

var React = require('react');
var ReactDOM = require('react-dom');


let store = createStore(rootReducer, {counter:0}
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function ReduxGoldenAcornApp() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    //<button onClick= {() =>dispatch(increment())}>+</button>
    return (
    <>

    <BuyAcorn />
    <DisplayAcorn />
    <EatAcorn />
    </>
    );
}

ReactDOM.render(
  <Provider store = {store}>
    <ReduxGoldenAcornApp />
  </Provider>
  ,document.getElementById('root')
);
