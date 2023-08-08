import './button.scss';
import PropTypes from 'prop-types';
import { Children } from 'react';
function Button({ children, onClick }) {
  return (
    <button className={`btn`} onClick={() => onClick()}>
      {Children.map(children, (child) => child)}
    </button>
  );
}

export function OutLinedButton({ children, onClick }) {
  return (
    <button className={`btn btn-outlined`} onClick={() => onClick()}>
      {Children.map(children, (child) => child)}
    </button>
  );
}

Button.proptypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
