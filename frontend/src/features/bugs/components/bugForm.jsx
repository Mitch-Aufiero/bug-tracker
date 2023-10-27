import React, { useState } from 'react';

function BugForm() {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        severity: '',
        project: '',
        desc: '',
        status: '',
        assignedTo: '',
        reportedBy: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log('Form Data Submitted:', formData);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="type">Bug Type</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="severity">Severity</label>
                <input
                    type="text"
                    id="severity"
                    name="severity"
                    value={formData.severity}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="project">Project</label>
                <input
                    type="text"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="desc">Description</label>
                <input
                    type="text"
                    id="desc"
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="status">Status</label>
                <input
                    type="text"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="assignedTo">Assigned To</label>
                <input
                    type="text"
                    id="assignedTo"
                    name="assignedTo"
                    value={formData.assignedTo}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="reportedBy">Reported By</label>
                <input
                    type="text"
                    id="reportedBy"
                    name="reportedBy"
                    value={formData.reportedBy}
                    onChange={handleChange}
                />
            </div>




            <button type="submit">Submit</button>
        </form>
    );
}

export default BugForm;
