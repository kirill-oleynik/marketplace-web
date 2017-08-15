import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonLinkWithIcon = ({ href, text, icon, type, className, ...rest }) => {
  if (href) {
    return (
      <a href={href} className={`btn-link-with-icon ${className}`} {...rest}>
        {text}
        <i className={classNames('icon', `icon-${icon}`, 'btn-link-with-icon__icon')} />
      </a>
    );
  }
  return (
    <button type={type} className={`btn-link-with-icon ${className}`} {...rest}>
      {text}
      <i className={classNames('icon', `icon-${icon}`, 'btn-link-with-icon__icon')} />
    </button>
  );
};

ButtonLinkWithIcon.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string,
  type: PropTypes.string
};

ButtonLinkWithIcon.defaultProps = {
  href: '',
  type: 'button',
  className: ''
};

export default ButtonLinkWithIcon;
