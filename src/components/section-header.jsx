import PropTypes from 'prop-types'
import '../styles/resume.css';

function SectionHeader({text}){
  return (
    <h2 className = "section-header">{text}</h2>
  )
}

SectionHeader.propTypes = {
  text: PropTypes.string,
}

export default SectionHeader;