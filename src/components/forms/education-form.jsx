import PropTypes from 'prop-types'
import FormNumber from '../active-form-number';

function EducationForm({props, handleInput, handleFormActive, formActiveNumber}){
  return (
    <>
    <div className = "form-container">
      <button className = "dropdown-button" data-index = {FormNumber.Education} onClick = {handleFormActive}>Education</button>
      {(formActiveNumber === FormNumber.Education) && 
        <div className = "form-container-excluding-header">
          <form>
            <label htmlFor = "universityName" required>University Name (Required):</label>
            <input type = "text" name = "universityName" id = "universityName" onChange = {handleInput} value = {props.universityName}/>
            <label htmlFor = "degree">Degree and Major:</label>
            <input type = "text" name = "degree" id = "degree" onChange = {handleInput} value = {props.degree}/>
            <label htmlFor = "gpa">GPA (only write if higher than 3.5):</label>
            <input type = "text" name = "gpa" id = "gpa" onChange = {handleInput} value = {props.gpa}/>
            <label htmlFor = "honorsAwards">Honors/Awards:</label>
            <input type = "text" name = "honorsAwards" id = "honorsAwards" onChange = {handleInput} value = {props.honorsAwards}/>
            <label htmlFor = "graduationDate">Graduation Date:</label>
            <input type = "text" name = "graduationDate" id = "graduationDate" onChange = {handleInput} value = {props.graduationDate}/>
            <label htmlFor = "location">Location:</label>
            <input type = "text" name = "location" id = "location" onChange = {handleInput} value = {props.location}/>
            <label htmlFor = "studentOrganizations">Student Organizations:</label>
            <input type = "text" name = "studentOrganizations" id = "studentOrganizations" onChange = {handleInput} value = {props.studentOrganizations}/>
          </form>
        </div>
      }
    </div>
    </>
  )
}


EducationForm.propTypes = {
  handleInput: PropTypes.func,
  props: PropTypes.object,
  universityName: PropTypes.string,
  degree: PropTypes.string,
  honorsAwards: PropTypes.string,
  graduationDate: PropTypes.string,
  location: PropTypes.string,
  studentOrganizations: PropTypes.string,
  gpa: PropTypes.string
}

export default EducationForm;