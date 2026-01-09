import { useState } from 'react'
import './App.css'
import { JobCard } from './components/JobCard.jsx'

function App() {
  const [count, setCount] = useState(0)

  const jobs = [
    {
      id: 1,
      company: "ABCReach",
      position: "Frontend Developer",
      location: "Remote",
      status: "Applied",
      notes: "Follow up in two weeks"
    },
    {
      id: 2,
      company: "TechSolutions",
      position: "Full Stack Developer",
      location: "New York, NY",
      status: "Interview Scheduled",
      notes: "Interview on March 15th at 10 AM"
    },
    {
      id: 3,
      company: "InnovateX",
      position: "Backend Developer",
      location: "San Francisco, CA",
      status: "Offer Received",
      notes: "Review offer details and respond by March 20th"
    } 
  ]
  return (
    jobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))
  )
}
  


export default App
