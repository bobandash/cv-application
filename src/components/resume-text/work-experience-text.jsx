import PropTypes from 'prop-types'
import '../../styles/resume.css';


function WorkExperienceText({companyName, jobTitle, duration, cityAndState, bulletPoints}){
  if(!(companyName)){
    return null;
  }

  return (
    <>
      <div className = "company-container">
        <div className = "company-and-duration-container">
          <h3>{companyName}</h3>
          {duration && <h3>{duration}</h3>}
        </div>
          <div className = "role-and-location-container">
          {jobTitle && <h3>{jobTitle}</h3>}
          {cityAndState && <h3>{cityAndState}</h3>}
        </div>
        {bulletPoints && <p className = "bullet-point">{bulletPoints}</p>}
      </div>
      </>
  )
}


WorkExperienceText.propTypes = {
  companyName: PropTypes.string,
  jobTitle: PropTypes.string,
  duration: PropTypes.string,
  cityAndState: PropTypes.string,
  bulletPoints: PropTypes.string
}

export default WorkExperienceText;

