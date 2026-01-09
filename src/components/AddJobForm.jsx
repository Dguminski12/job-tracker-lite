import {useState} from 'react';
import './AddJobForm.css';

export function AddJobForm({onAddJob}) {

    const [formData, setFormData] = useState({
        company: '',
        position: '',
        location: '',
        dateApplied: '',
        status: 'Applied',
        notes: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        onAddJob(formData);
        console.log('Form submitted:', formData);
    }

    return (
        <form className="add-job-form" onSubmit={handleSubmit}>
            <h2>Add New Job</h2>
            <div>
                <label>
                    Company:
                    <input type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange} />
                </label>
                <label>
                    Position:
                    <input type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange} />
                </label>
                <label>
                    Location:
                    <input type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange} />
                </label>
                <label>
                    Date Applied:
                    <input type="date"
                    name="dateApplied"
                    value={formData.dateApplied}
                    onChange={handleChange} />
                </label>
                <label>
                    Status:
                    <select name="status"
                    value={formData.status}
                    onChange={handleChange}>
                        <option value="Applied">Applied</option>
                        <option value="Interview Scheduled">Interview Scheduled</option>
                        <option value="Offer Received">Offer Received</option>
                        <option value="Pending">Pending</option>
                        <option value="Offer Declined">Offer Declined</option>
                    </select>
                </label>
                <label className="full-width">
                    Notes:
                    <textarea 
                    name="notes"
                    value= {formData.notes}
                    onChange={handleChange}></textarea>
                </label>
            </div>
            <button type="submit">Add Job</button>
        </form>
    );
}