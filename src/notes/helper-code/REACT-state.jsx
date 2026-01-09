// useState lets React "watch" a value
// When the value changes, the UI re-renders

import { useState } from "react";

function CounterExample() {
  // useState returns TWO things:
  // 1. The current value
  // 2. A function to update that value
  const [count, setCount] = useState(0);

  function increase() {
    // NEVER change state directly
    // Always use the setter function
    setCount(count + 1);
  }

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={increase}>Add 1</button>
    </div>
  );
}


import { useState } from "react";

function JobsExample() {
  const [jobs, setJobs] = useState([
    { id: 1, company: "Google" },
    { id: 2, company: "Amazon" }
  ]);

  function addJob() {
    const newJob = {
      id: Date.now(),
      company: "Netflix"
    };

    // Create a NEW array (do not mutate!)
    setJobs([...jobs, newJob]);
  }

  return (
    <div>
      {jobs.map((job) => (
        <p key={job.id}>{job.company}</p>
      ))}

      <button onClick={addJob}>Add Job</button>
    </div>
  );
}
