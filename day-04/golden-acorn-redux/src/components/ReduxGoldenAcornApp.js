import BuyAcorn from './buy-acorn.js';
import EatAcorn from './eat-acorn.js';
import DisplayAcorn from './display-container.js';

var React = require('react');

function ReduxGoldenAcornApp() {

    return (
    <>
      <BuyAcorn />
        <DisplayAcorn />
      <EatAcorn />
    </>
  );
}

export default ReduxGoldenAcornApp;
