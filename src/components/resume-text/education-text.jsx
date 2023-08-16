import PropTypes from 'prop-types'
import SectionHeader from '../section-header';

function EducationText({universityName, degree, honorsAwards, studentOrganizations, graduationDate, location, gpa}){
  if(!(universityName)){
    return null;
  }

  return (
    <>
      <div className = "educationContainer">
        <SectionHeader text = "Education" />
        <div className = "company-and-duration-container">
          <h3>{universityName}</h3>
          {graduationDate && <h3>{graduationDate}</h3>}
        </div>
          <div className = "role-and-location-container">
          {(degree && gpa) && <h3>{degree} (GPA: {gpa})</h3>}
          {(degree && !gpa) && <h3>{degree}</h3>}
          {location && <h3>{location}</h3>}
        </div>
        {(honorsAwards || studentOrganizations) &&
          <ul>
            {honorsAwards && <li><b>Honors & Awards: </b>{honorsAwards}</li>}
            {studentOrganizations && <li><b>Student Organizations: </b>{studentOrganizations}</li>}
          </ul>                
        }
      </div>
      </>
  )
}


EducationText.propTypes = {
  universityName: PropTypes.string,
  degree: PropTypes.string,
  honorsAwards: PropTypes.string,
  studentOrganizations: PropTypes.string,
  graduationDate: PropTypes.string,
  location: PropTypes.string,
  gpa: PropTypes.string
}


export default EducationText;