import PropTypes from 'prop-types'
import FormNumber from '../active-form-number';

function SkillsAndInterestsForm({props, handleInput, handleFormActive, formActiveNumber}){
  return (
    <>
    <div className = "form-container">
      <button className = "dropdown-button" data-index = {FormNumber.SkillsInterest} onClick = {handleFormActive}>Skills And Interests</button>
      {(formActiveNumber === FormNumber.SkillsInterest) && 
        <div className = "form-container-excluding-header">
          <form>
            <label htmlFor = "skills" required>Skills:</label>
            <input type = "text" name = "skills" id = "skills" onChange = {handleInput} value = {props.skills}/>
            <label htmlFor = "interests">Interests:</label>
            <input type = "text" name = "interests" id = "interests" onChange = {handleInput} value = {props.interests}/>
          </form>
        </div>
      }
    </div>
    </>
  )
}

SkillsAndInterestsForm.propTypes = {
  handleInput: PropTypes.func,
  props: PropTypes.object,
  skills: PropTypes.string,
  interests: PropTypes.string
}

export default SkillsAndInterestsForm;