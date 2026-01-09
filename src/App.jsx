import { useState, useEffect } from 'react'
import './App.css'
import { JobCard } from './components/JobCard.jsx'
import { AddJobForm } from './components/AddJobForm.jsx'
import { Filter } from './components/Filter.jsx'

function App() {

  const [jobs, setJobs] = useState( () => {
    const savedJobs = localStorage.getItem("jobs");
    if(savedJobs) {
      return JSON.parse(savedJobs);
    }
    return [
      {
        id: 1,
        company: "ABCReach",
        position: "Frontend Developer",
        location: "Remote",
        dateApplied: "2024-03-01",
        status: "Applied",
        notes: "Follow up in two weeks"
      },
      {
        id: 2,
        company: "TechSolutions",
        position: "Full Stack Developer",
        location: "New York, NY",
        dateApplied: "2024-02-25",
        status: "Interview Scheduled",
        notes: "Interview on March 15th at 10 AM"
      },
      {
        id: 3,
        company: "InnovateX",
        position: "Backend Developer",
        location: "San Francisco, CA",
        dateApplied: "2024-02-20",
        status: "Offer Received",
        notes: "Review offer details and respond by March 20th"
      } 
    ]
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);


  function addJob(formData) {
    setJobs((prevJobs) => [
      ...prevJobs,
      { id: prevJobs.length + 1, ...formData }
    ]);
    
  }

  const [filter, setFilter] = useState(() => {
    const savedFilter = localStorage.getItem("filter");
    return savedFilter ? savedFilter : "All";
  });

  useEffect(() => {
    localStorage.setItem("filter", filter);
  } , [filter]);

  return (
    <div>
      <AddJobForm onAddJob={addJob} />
      <Filter filter={filter} setFilter={setFilter} /> 
      {jobs.filter(job => filter === 'All' || job.status === filter).map((job) => (
      <JobCard key={job.id} job={job} />))}
    </div>

  )
}
  


export default App
