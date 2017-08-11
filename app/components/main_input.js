import PropTypes from 'prop-types'
import classNames from 'classnames'

const MainInput = ({ label, hint, type, className }) => {
  return (
    <div className={classNames('main-input', className)}>
      <div className ="main-input__field-box">
        <input type={type} className="main-input__field" />
        <label className="main-input__label">{label}</label>
      </div>
      <div className="main-input__hint">{hint}</div>
    </div>
  )
}

MainInput.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  type: PropTypes.string
}

MainInput.defaultProps = {
  type: 'text'
}

export default MainInput
