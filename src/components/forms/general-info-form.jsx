import  '../../styles/forms.css'
import PropTypes from 'prop-types'
import FormNumber from '../active-form-number'

function GeneralInfoForm({handleInput, props, handleFormActive, formActiveNumber}){
  return (
    <>
    <div className = "form-container">
      <button onClick = {handleFormActive} data-index = {FormNumber.GeneralInfo} className = "dropdown-button">General Information</button>
      {(formActiveNumber === FormNumber.GeneralInfo) && 
          <div className = "form-container-excluding-header">
            <form>
              <label htmlFor = "name" required>Full Name (Required):</label>
              <input type = "text" name = "name" id = "name" onChange = {handleInput} value = {props.name}/>
              <label htmlFor = "email">Email (Recommended):</label>
              <input type = "email" name = "email" id = "email" onChange = {handleInput} value = {props.email}/>
              <label htmlFor = "phoneNumber">Phone Number (Recommended):</label>
              <input type = "text" name = "phoneNumber" id = "phoneNumber" onChange = {handleInput} value = {props.phoneNumber}/>
              <label htmlFor = "cityAndState">City and State (Recommended):</label>
              <input type = "text" name = "cityAndState" id = "cityAndState" onChange = {handleInput} value = {props.cityAndState}/>
            </form>
          </div> 
      }
      </div> 
    </>
  )
}

GeneralInfoForm.propTypes = {
  handleInput: PropTypes.func,
  props: PropTypes.object,
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  cityAndState: PropTypes.string,
  handleFormActive: PropTypes.func,
  formActiveNumber: PropTypes.number,
}

export default GeneralInfoForm;