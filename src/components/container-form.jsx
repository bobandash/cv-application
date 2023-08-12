import '../styles/container.css'
import PropTypes from 'prop-types'

function FormContainer({children}){
  return (
    <div id = "forms-container">
      {children}
    </div>
  )
}

FormContainer.propTypes = {
  children: PropTypes.element
}

export default FormContainer;