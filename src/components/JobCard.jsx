export function JobCard({ job }) {
    return (
        <div className="job-card">
            <h1>{job.position}</h1>
            <h2>{job.company} - {job.location}</h2>
            <p>{job.status}</p>
            <p>{job.notes}</p>
        </div>
    );
}