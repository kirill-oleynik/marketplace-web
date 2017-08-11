import PropTypes from 'prop-types'
import classNames from 'classnames'
import Textarea from 'react-textarea-autosize';

const MainTextarea = ({ label, hint, className }) => {
  return (
    <div className={classNames('main-input', className)}>
      <div className ="main-input__field-box">
        <Textarea className="main-input__field main-input__field--textarea"></Textarea>
        <label className="main-input__label">{label}</label>
      </div>
      <div className="main-input__hint">{hint}</div>
    </div>
  )
}

MainTextarea.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string
}

export default MainTextarea
