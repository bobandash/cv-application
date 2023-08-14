function JobList({jobs}){
  return (
    <div className = "jobs-list">
      {jobs.map(job => <button key = {job.id}>{job.companyName}</button>)}
    </div>
  )
}

export default JobList;