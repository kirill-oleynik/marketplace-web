import PropTypes from 'prop-types'
import classNames from 'classnames'

const MainCheckbox = ({ name, text, className }) => {
  return (
    <label className={classNames('main-checkbox', className)}>
      <input type="checkbox" className="main-checkbox__input" name={name} />
      <span className="main-checkbox__icon icon" />
      <span className="main-checkbox__text">{text}</span>
    </label>
  )
}

MainCheckbox.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string
}

export default MainCheckbox
