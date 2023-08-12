import FormContainer from './container-form'
import GeneralInfoForm from './general-info-form'
import ResumeContainer from './container-resume'
import GeneralInfoText from './general-info-text'

import { useState } from 'react';

function App(){
  const [generalInfo, setGeneralInfo] = useState({
    name: "Bruce Hsu",
    email: "brucescreation@gmail.com",
    phoneNumber: "911",
    cityAndState: "Los Angeles, CA"
  });

  function handleInput(e){
    const value = e.target.value;
    const prop = e.target.name;
    setGeneralInfo({...generalInfo, [prop]: value})
  }
  

  return (
    <>
    <FormContainer>
      <GeneralInfoForm handleInput = {handleInput} props = {generalInfo}/>
    </FormContainer>
    <ResumeContainer>
      <GeneralInfoText {...generalInfo} />
    </ResumeContainer>
    </>
  )
}

export default App;