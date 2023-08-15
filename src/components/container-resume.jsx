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

function ResumeContentContainer({children}){
  return (
    <div id = "resume-content-container">
      {children}
    </div>    
  )
}

ResumeContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

ResumeContentContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export {ResumeContainer, ResumeContentContainer};