import FormContainer from './forms/container-form'
import GeneralInfoForm from './forms/general-info-form'
import {ResumeContainer, ResumeContentContainer} from './container-resume'
import GeneralInfoText from './resume-text/general-info-text'
import WorkExperienceForm from './forms/work-experience-form'
import '@fortawesome/fontawesome-free'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import { workExperienceData, generalInfoData, educationData, skillsInterestsData } from './sample-data'
import SectionHeader from './resume-text/section-header'
import WorkExperienceText from './resume-text/work-experience-text'
import EducationForm from './forms/education-form'
import EducationText from './resume-text/education-text'
import SkillsAndInterestsForm from './forms/skills-interests-form'
import SkillsInterestsText from './resume-text/skills-interests-text'

function App(){
  const [generalInfo, setGeneralInfo] = useState(generalInfoData);
  const [currentWorkExperience, setCurrentWorkExperience] = useState({})
  const [workExperience, setWorkExperience] = useState(workExperienceData)
  const [education, setEducation] = useState(educationData);
  const [skillsInterests, setSkillsInterests] = useState(skillsInterestsData);

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
    setCurrentWorkExperience({});
  }

  function handleSetEducation(e){
    const value = e.target.value;
    const prop = e.target.name;
    setEducation({...education, [prop]: value})    
  }

  function handleSkillsAndInterests(e){
    const value = e.target.value;
    const prop = e.target.name;
    setSkillsInterests({...skillsInterests, [prop]: value}) 
  }

  const hasWorkExperience = ((Object.keys(currentWorkExperience).length > 0 || workExperience.length > 0) ? true : false)
  return (
    <>
    <FormContainer>
      <GeneralInfoForm handleInput = {handleGeneralInfoInput} props = {generalInfo}/>
      <WorkExperienceForm workExperience = {workExperience} handleSetWorkExperience = {handleSetWorkExperience} handleInput = {handleWorkExperienceInput} currentWorkExperience = {currentWorkExperience}/>
      <EducationForm props = {education} handleInput = {handleSetEducation} />
      <SkillsAndInterestsForm props = {skillsInterests} handleInput = {handleSkillsAndInterests} />
    </FormContainer>
    <ResumeContainer>
      <GeneralInfoText {...generalInfo} />
      <ResumeContentContainer>
          {hasWorkExperience && <SectionHeader text = "Work Experience" />}
          {workExperience.map(job => (
            <WorkExperienceText key = {job.id} {...job} />
          ))}
          <WorkExperienceText {... currentWorkExperience} />
          <EducationText {... education} />
          <SkillsInterestsText {... skillsInterests} />
      </ResumeContentContainer>
    </ResumeContainer>
    </>
  )
}

export default App;