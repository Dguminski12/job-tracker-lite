import './Filter.css';

export function Filter({ filter, setFilter }) {
  return (
    <div className="filter-container">
      <label htmlFor="status-filter">Filter by Status: </label>
      <select
        id="status-filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
        <option value="Offer Received">Offer Received</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option> 
      </select>
    </div>
  );
}