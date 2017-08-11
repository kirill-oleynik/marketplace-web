import PropTypes from 'prop-types'
import classNames from 'classnames'

const ButtonLink = ({ href, text, type, ...rest }) => {
  if (href) {
    return (
      <a href={href} className="button-link" {...rest}>{text}</a>
    )
  }
  return (
    <button type={type} className="button-link" {...rest}>{text}</button>
  )
}

ButtonLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string
}

ButtonLink.defaultProps = {
  type: 'button'
}

export default ButtonLink
