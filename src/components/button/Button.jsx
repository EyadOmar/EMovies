import './button.scss';
import PropTypes from 'prop-types';
import { Children } from 'react';
function Button({ children, onClick, classNameProp }) {
  return (
    <button
      className={`btn ${classNameProp ? classNameProp : ''}`}
      onClick={() => onClick()}
    >
      {Children.map(children, (child) => child)}
    </button>
  );
}

export function OutLinedButton({ children, onClick, classNameProp }) {
  return (
    <button
      className={`btn btn-outlined ${classNameProp ? classNameProp : ''}`}
      onClick={() => onClick()}
    >
      {Children.map(children, (child) => child)}
    </button>
  );
}

Button.proptypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
