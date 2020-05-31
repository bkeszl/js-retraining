import { connect } from 'react-redux';
import { decrement } from '../actions';
import Button from './Button.js';

const mapStateToProps = (state) => {
  return {
    value: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(decrement());
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
