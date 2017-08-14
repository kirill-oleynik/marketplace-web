import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonLinkWithIcon = ({ href, text, icon, type, ...rest }) => {
  if (href) {
    return (
      <a href={href} className="btn-link-with-icon" {...rest}>
        {text}
        <i className={classNames('icon', `icon-${icon}`, 'btn-link-with-icon__icon')} />
      </a>
    );
  }
  return (
    <button type={type} className="btn-link-with-icon" {...rest}>
      {text}
      <i className={classNames('icon', `icon-${icon}`, 'btn-link-with-icon__icon')} />
    </button>
  );
};

ButtonLinkWithIcon.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string
};

ButtonLinkWithIcon.defaultProps = {
  href: '',
  type: 'button'
};

export default ButtonLinkWithIcon;
