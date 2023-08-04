import './button.scss';
import PropTypes from 'prop-types';
function Button({ Children, type, onClick }) {
  return (
    <button className={`btn ${type}`} onClick={() => onClick()}>
      {Children}
    </button>
  );
}

function OutLinedButton({ Children, type, onClick }) {
  return (
    <button className={`btn-outlined ${type}`} onClick={() => onClick()}>
      {Children}
    </button>
  );
}

Button.proptypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
