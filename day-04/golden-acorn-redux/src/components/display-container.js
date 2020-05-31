import { connect } from 'react-redux';
import Display from './Display.js';

const mapStateToProps = (state) => {
  return {
    children: state.counter
  };
};

const DisplayAcorn = connect(
  mapStateToProps,
)(Display);

export default DisplayAcorn;
