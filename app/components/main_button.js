import PropTypes from 'prop-types'
import classNames from 'classnames'

const MainButton = ({color, size, className, ...rest}) => {
  return (
    <button className={classNames('main-btn', `main-btn--${color}`, `main-btn--${size}`, className)} {...rest} />
  )
}

MainButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
}

MainButton.defaultProps = {
  type: 'button'
}

export default MainButton
