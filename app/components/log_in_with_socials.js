import PropTypes from 'prop-types';

const LogInWithSocials = ({ className }) => (
  <button type="button" className={`button-login-with-socials button-login-with-socials--linkedin ${className}`}>
    <i className="icon icon-linkedin button-login-with-socials__icon" />
    <span>Log in with Linkedin</span>
  </button>
);

LogInWithSocials.propTypes = {
  className: PropTypes.string
};

LogInWithSocials.defaultProps = {
  className: ''
};

export default LogInWithSocials;
