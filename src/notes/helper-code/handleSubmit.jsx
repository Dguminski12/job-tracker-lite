    function handleSubmit(event) {
        event.preventDefault();
        onAddJob(formData);
        console.log('Form submitted:', formData);
    }

      function addJob(formData) {
    setJobs((prevJobs) => [
      ...prevJobs,
      { id: prevJobs.length + 1, ...formData }
    ]);
    
  }     
  
  <AddJobForm onAddJob={addJob} />