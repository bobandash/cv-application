import SectionHeader from "./section-header";
import PropTypes from 'prop-types'
import '../../styles/resume.css';

function SkillsInterestsText({skills, interests}){
  if(!(skills || interests)){
    return null;
  }

  return (
    <>
      <div className = "skills-interests-container">
        {(skills && interests) && <SectionHeader text = "Skills and Interests" />}
        {(skills && !interests) && <SectionHeader text = "Skills" />}
        {(!skills && interests) && <SectionHeader text = "Interests" />}
        <ul>
          {skills && <li><b>Skills: </b>{skills}</li>}
          {interests && <li><b>Interests: </b>{interests}</li>}
        </ul>                
      </div>
      </>
  )
}


SkillsInterestsText.propTypes = {
  skills: PropTypes.string,
  interests: PropTypes.string,
}

export default SkillsInterestsText;
