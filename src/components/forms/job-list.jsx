import PropTypes from 'prop-types'

function JobList({jobs, handleJobDelete, handleJobEdit, toggleJobFormStatus, handleToggleHideJob}){
  return (
    <div className = "jobs-list">
      {jobs.map(job => 
      (
        <div key = {job.id} className = "collapsed-job">
          <h1>{job.companyName}</h1>
          <button onClick = {() => {
            handleToggleHideJob(job.id);
          }}>
            {job.isHidden && <i className="fa-solid fa-eye-slash"></i>}
            {!job.isHidden && <i className="fa-solid fa-eye"></i>}
          </button>          
          <button onClick = {() => {
            handleJobEdit(job.id);
            toggleJobFormStatus();
          }}><i className="fa-solid fa-pen-to-square"></i></button>
          <button onClick = {() => {
            handleJobDelete(job.id);
          }}><i className="fa-solid fa-trash"></i></button>
        </div>
      )
    )}
    </div>
  )
}

JobList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object),
  handleJobDelete: PropTypes.func,
  handleJobEdit: PropTypes.func,
  toggleJobFormStatus: PropTypes.func,
  handleToggleHideJob: PropTypes.func,
}

export default JobList;