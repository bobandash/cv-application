import '../styles/container.css'
import PropTypes from 'prop-types'

function ResumeContainer({children}){
  return (
    <div id = "resume-container" className = "mobile-hidden">
      <div id = "resume">
        {children}
      </div>
    </div>
  )
}

ResumeContainer.propTypes = {
  children: PropTypes.element
}

export default ResumeContainer;