import PropTypes from 'prop-types'
import '../../styles/general-info-styling.css'

function GeneralInfoText({name, email, phoneNumber, cityAndState}){
  if(!name){
    return null;
  }

  const hasOtherInformationExcludingName = (email || phoneNumber || cityAndState);

  if(hasOtherInformationExcludingName){
    return (
      <>
        <h1>{name}</h1>
        <div className = "other-general-information">
          {email && <h2>{email}</h2>}
          {phoneNumber && <h2>{phoneNumber}</h2>}
          {cityAndState && <h2>{cityAndState}</h2>}
        </div>
      </>
    )
  }

  return (
    <h1>{name}</h1>
  )
}

GeneralInfoText.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  cityAndState: PropTypes.string,
}


export default GeneralInfoText;

