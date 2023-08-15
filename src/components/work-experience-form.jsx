import  '../styles/forms.css';
import PropTypes from 'prop-types';

import JobList from './work-experience-form-components/job-list';
import '../styles/work-experience-form.css';
import { useState } from 'react';

function AddJobForm({toggleAddJobStatus, handleInput, currentWorkExperience, handleFinish}){
  return (
    <>  
      <form>
        <label htmlFor = "companyName" required>Company Name:</label>
        <input type = "text" name = "companyName" id = "companyName" onChange = {handleInput} value = {currentWorkExperience.companyName}/>
        <label htmlFor = "jobTitle" required>Job Title:</label>
        <input type = "text" name = "jobTitle" id = "jobTitle" onChange = {handleInput} value = {currentWorkExperience.jobTitle}/>
        <label htmlFor =  "duration" required>Worked From (Date Range):</label>
        <input type = "text" name = "duration" id = "duration" onChange = {handleInput} value = {currentWorkExperience.duration}/>
        <label htmlFor =  "cityAndState" required>City And State:</label>
        <input type = "text" name = "cityAndState" id = "cityAndState" onChange = {handleInput} value = {currentWorkExperience.cityAndState}/>
        <label htmlFor =  "bulletPoints" required>Description of Job Responsibilities:</label>
        <input type = "text" name = "bulletPoints" id = "bulletPoints" onChange = {handleInput} value = {currentWorkExperience.bulletPoints}/>
      </form>
      <div className = "button-container">
        <button className = "finish-adding-job" onClick={() => {
            toggleAddJobStatus();
            handleFinish();
          }}>
          Finish Adding Job</button>
      </div>
    </>
  )
}


function WorkExperienceForm({workExperience, handleInput, currentWorkExperience, handleSetWorkExperience}){
  const [isAddJobFormOpen, setIsAddJobFormOpen] = useState(false);
  const hasAtLeastOneJob = (workExperience.length > 0 ? true : false);
  function toggleAddJobStatus(){
    setIsAddJobFormOpen(!isAddJobFormOpen);
  }
  return (
    <>
    <div className = "form-container">
      <button className = "dropdown-button"><h1>Work Experience</h1></button>
      <div className = "form-container-excluding-header">
        {(hasAtLeastOneJob) && <JobList jobs = {workExperience} />}
        {!(isAddJobFormOpen) && <button className = "add-job" onClick = {toggleAddJobStatus}>Add Job</button>}
        {(isAddJobFormOpen) && <AddJobForm handleFinish = {handleSetWorkExperience} toggleAddJobStatus = {toggleAddJobStatus} handleInput = {handleInput} currentWorkExperience = {currentWorkExperience}/>}
      </div>
    </div>
    </>
  )
}

export default WorkExperienceForm;