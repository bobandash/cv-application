import '../../styles/forms.css'
import PropTypes from 'prop-types'

function FormButtons({handleClearData, handleMobileDisplayResume}){
  return (
    <>
      <button className = "remove-mobile-form hidden" onClick = {handleMobileDisplayResume}><i className="fa-solid fa-xmark"></i></button>
      <div className = "form-general-buttons">
        <button onClick = {handleClearData}>Clear Data</button>
        <button onClick = {handleMobileDisplayResume} className = "display-resume">Display Resume</button>
      </div>
    </>
  )
}

export default FormButtons;

FormButtons.propTypes = {
  handleClearData: PropTypes.func,
  handleMobileDisplayResume: PropTypes.func,
}