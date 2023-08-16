import  '../../styles/forms.css';
import PropTypes from 'prop-types';
import FormNumber from '../active-form-number';
import JobList from './job-list';
import { useState } from 'react';


function AddJobForm({toggleJobFormStatus, handleInput, currentWorkExperience, handleFinish}){
  return (
    <>  
      <form className = "work-experience-form">
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
            toggleJobFormStatus();
            handleFinish();
          }}>
          Finish Adding Job</button>
      </div>
    </>
  )
}

function EditJobForm({toggleJobFormStatus, handleInput, allWorkExperience, handleFinish}){
  const jobEdited = allWorkExperience.filter(job => job.isEditing === true)[0];

  return (
    <>  
      <form className = "work-experience-form">
        <label htmlFor = "companyName" required>Company Name:</label>
        <input type = "text" name = "companyName" id = "companyName" onChange = {handleInput} value = {jobEdited.companyName}/>
        <label htmlFor = "jobTitle" required>Job Title:</label>
        <input type = "text" name = "jobTitle" id = "jobTitle" onChange = {handleInput} value = {jobEdited.jobTitle}/>
        <label htmlFor =  "duration" required>Worked From (Date Range):</label>
        <input type = "text" name = "duration" id = "duration" onChange = {handleInput} value = {jobEdited.duration}/>
        <label htmlFor =  "cityAndState" required>City And State:</label>
        <input type = "text" name = "cityAndState" id = "cityAndState" onChange = {handleInput} value = {jobEdited.cityAndState}/>
        <label htmlFor =  "bulletPoints" required>Description of Job Responsibilities:</label>
        <input type = "text" name = "bulletPoints" id = "bulletPoints" onChange = {handleInput} value = {jobEdited.bulletPoints}/>
      </form>
      <div className = "button-container">
        <button className = "finish-editing-job" onClick={() => {
            toggleJobFormStatus();
            handleFinish();
          }}>
          Finish Editing Job</button>
      </div>
    </>
  )
}


function WorkExperienceForm({workExperience, handleInput, currentWorkExperience, handleSetWorkExperience, handleFormActive, formActiveNumber, handleJobDelete, handleJobEdit, handleFinishJobEdit, handleJobEditInput}){
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);
  const hasAtLeastOneJob = (workExperience.length > 0 ? true : false);
  const isEditingJob = workExperience.filter(job => job.isEditing === true).length > 0 ? true : false;

  function toggleJobFormStatus(){
    setIsJobFormOpen(!isJobFormOpen);
  }
  return (
    <>
    <div className = "form-container">
      <button className = "dropdown-button" data-index = {FormNumber.WorkExperience} onClick = {handleFormActive}>Work Experience</button>
      {(formActiveNumber === FormNumber.WorkExperience) && 
        <div className = "form-container-excluding-header">
          {(hasAtLeastOneJob && !isJobFormOpen) && <JobList jobs = {workExperience} handleJobDelete = {handleJobDelete} handleJobEdit = {handleJobEdit} toggleJobFormStatus = {toggleJobFormStatus}/>}
          {!(isJobFormOpen) && <button className = "add-job" onClick = {toggleJobFormStatus}>Add Job</button>}
          {(isJobFormOpen && !isEditingJob) && <AddJobForm handleFinish = {handleSetWorkExperience} toggleJobFormStatus = {toggleJobFormStatus} handleInput = {handleInput} currentWorkExperience = {currentWorkExperience}/>}
          {isEditingJob && <EditJobForm handleFinish = {handleFinishJobEdit} toggleJobFormStatus = {toggleJobFormStatus} handleInput = {handleJobEditInput} allWorkExperience = {workExperience} />}
        </div>
      }
      </div>
    </>
  )
}

AddJobForm.propTypes = {
  toggleJobFormStatus: PropTypes.func,
  handleInput: PropTypes.func,
  currentWorkExperience: PropTypes.object,
  handleFinish: PropTypes.func
}

EditJobForm.propTypes = {
  toggleJobFormStatus: PropTypes.func,
  handleInput: PropTypes.func,
  allWorkExperience: PropTypes.arrayOf(PropTypes.object),
  handleFinish: PropTypes.func
}

WorkExperienceForm.propTypes = {
  workExperience: PropTypes.arrayOf(PropTypes.object),
  handleInput: PropTypes.func,
  currentWorkExperience: PropTypes.object,
  handleSetWorkExperience: PropTypes.func, 
  handleFormActive: PropTypes.func, 
  formActiveNumber: PropTypes.number,
  handleJobDelete: PropTypes.func,
  handleJobEdit: PropTypes.func,
  handleFinishJobEdit: PropTypes.func,
  handleJobEditInput: PropTypes.func,
}

export default WorkExperienceForm;