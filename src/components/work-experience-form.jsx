import  '../styles/forms.css'
import PropTypes from 'prop-types'
import { v4 as uuid} from 'uuid';
import JobList from './work-experience-form-components/job-list';
import '../styles/work-experience-form.css'



function AddJobForm(){
  return (
  <>  
    <form>
      <label htmlFor = "company-name" required>Company Name:</label>
      <input type = "text" name = "company-name" id = "company-name"/>
      <label htmlFor = "job-title" required>Job Title:</label>
      <input type = "text" name = "job-title" id = "job-title"/>
      <label htmlFor =  "duration" required>Worked From (Date Range):</label>
      <input type = "text" name = "duration" id = "duration"/>
      <label htmlFor =  "city-and-state" required>City And State:</label>
      <input type = "text" name = "city-and-state" id = "city-and-state"/>
    </form>
    <div className = "button-container">
      <button className = "add-bullet-point">Add Bullet Points</button>
      <button className = "add-bullet-point">Finish Job</button>
    </div>
    </>
  )
}


function WorkExperienceForm(){
  const hasOneJob = true;
  const experienceJobNames = [
    {
      companyName: 'Amazon',
      jobTitle: 'Chief Executive Officer',
      duration: 'August 14, 2023 - August 14, 2023',
      cityAndState: 'Seattle, Washington',
      bulletPoints: [
        'Led 1M people to handle logistics and innovate faster shipping methods to increase customer experience',
        'Got fired because I actually went to the HQ, and security would not let me thorugh'
      ],
      id: uuid(),
    },
    {
      companyName: 'Apple',
      jobTitle: 'Chief Executive Officer',
      duration: 'August 14, 2023 - August 14, 2023',
      cityAndState: 'Seattle, Washington',
      bulletPoints: [
        'Led 1M people to handle logistics and innovate faster shipping methods to increase customer experience',
        'Got fired because I actually went to the HQ, and security would not let me thorugh'
      ],
      id: uuid(),
    }
  ]
  const isCurrentlyAddingJob = false;

  return (
    <>
    <div className = "form-container">
      <button className = "dropdown-button"><h1>Work Experience</h1></button>
      <div className = "form-container-excluding-header">
        {(hasOneJob) && <JobList jobs = {experienceJobNames} />}
        {!hasOneJob && <AddJobForm />}
        {!(isCurrentlyAddingJob) && <button className = "add-job">Add Job</button>}
      </div>
    </div>
    </>
  )
}




/* WorkExperienceForm.propTypes = {

} */

export default WorkExperienceForm;