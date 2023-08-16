import PropTypes from 'prop-types'

function SkillsAndInterestsForm({props, handleInput}){
  return (
    <>
    <div className = "form-container">
      <button className = "dropdown-button"><h1>Skills And Interests</h1></button>
      <div className = "form-container-excluding-header">
        <form>
          <label htmlFor = "skills" required>Skills:</label>
          <input type = "text" name = "skills" id = "skills" onChange = {handleInput} value = {props.skills}/>
          <label htmlFor = "interests">Interests:</label>
          <input type = "text" name = "interests" id = "interests" onChange = {handleInput} value = {props.interests}/>
        </form>
      </div>
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