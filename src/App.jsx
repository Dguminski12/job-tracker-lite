import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      <div key={job.id}>{job.company}</div>
    ))
  )
}
  


export default App
