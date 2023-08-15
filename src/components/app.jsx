import FormContainer from './container-form'
import GeneralInfoForm from './general-info-form'
import {ResumeContainer, ResumeContentContainer} from './container-resume'
import GeneralInfoText from './general-info-text'
import WorkExperienceForm from './work-experience-form'
import '@fortawesome/fontawesome-free'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import { workExperienceData, generalInfoData } from './sample-data'
import SectionHeader from './section-header'
import WorkExperienceText from './work-experience-text'

function App(){
  const [generalInfo, setGeneralInfo] = useState(generalInfoData);
  const [currentWorkExperience, setCurrentWorkExperience] = useState({})
  const [workExperience, setWorkExperience] = useState(workExperienceData)

  function handleGeneralInfoInput(e){
    const value = e.target.value;
    const prop = e.target.name;
    setGeneralInfo({...generalInfo, [prop]: value})
  }

  function handleWorkExperienceInput(e) {
    const value = e.target.value;
    const prop = e.target.name;
    setCurrentWorkExperience({...currentWorkExperience, [prop]: value})
  }

  // when the finish button is clicked on, the work experience is added
  function handleSetWorkExperience(){
    const newWorkExperience = {...currentWorkExperience, id: uuid()};
    setWorkExperience([...workExperience, newWorkExperience]);
    console.log(workExperience);
    setCurrentWorkExperience({});
  }

  const hasWorkExperience = ((Object.keys(currentWorkExperience).length > 0 || workExperience.length > 0) ? true : false)
  return (
    <>
    <FormContainer>
      <GeneralInfoForm handleInput = {handleGeneralInfoInput} props = {generalInfo}/>
      <WorkExperienceForm workExperience = {workExperience} handleSetWorkExperience = {handleSetWorkExperience} handleInput = {handleWorkExperienceInput} currentWorkExperience = {currentWorkExperience}/>
    </FormContainer>
    <ResumeContainer>
      <GeneralInfoText {...generalInfo} />
      <ResumeContentContainer>
          {hasWorkExperience && <SectionHeader text = "Work Experience" />}
          {workExperience.map(job => (
            <WorkExperienceText key = {job.id} {...job} />
          ))}
          <WorkExperienceText {... currentWorkExperience} />
      </ResumeContentContainer>
    </ResumeContainer>
    </>
  )
}

export default App;