import PropTypes from 'prop-types';
import classNames from 'classnames';

const MainButton = ({ color, size, className, ...rest }) => (
  <button className={classNames('main-btn', `main-btn--${color}`, `main-btn--${size}`, className)} {...rest} />
);

MainButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

MainButton.defaultProps = {
  className: '',
  type: 'button'
};

export default MainButton;
