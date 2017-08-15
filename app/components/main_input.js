import PropTypes from 'prop-types';
import classNames from 'classnames';

const MainInput = ({ name, label, hint, type, icon, className }) => {
  if (icon) {
    return (
      <div className={classNames('main-input', className)}>
        <div className="main-input__field-box">
          <i className={classNames(`main-input__icon icon icon-${icon}`)} />
          <input type={type} name={name} className="main-input__field" />
          <label htmlFor={name} className="main-input__label">{label}</label>
        </div>
        <div className="main-input__hint">{hint}</div>
      </div>
    );
  }
  return (
    <div className={classNames('main-input', className)}>
      <div className="main-input__field-box">
        <input type={type} name={name} className="main-input__field" />
        <label htmlFor={name} className="main-input__label">{label}</label>
      </div>
      <div className="main-input__hint">{hint}</div>
    </div>
  );
};

MainInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  hint: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string
};

MainInput.defaultProps = {
  type: 'text',
  icon: '',
  className: ''
};

export default MainInput;
