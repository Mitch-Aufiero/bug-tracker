import React, { useState } from 'react';
import { apiRequest } from '../../../api/api';

const mockProjects = [
    { id: 1, name: 'Project Alpha' },
    { id: 2, name: 'Project Beta' },
    
];

const mockUsers = [
    { id: 1, name: 'Mortimer Cat\'O Darkness' },
    { id: 2, name: 'Obi Flamepoint' },
    
];


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
    const [projects, setProjects] = useState(mockProjects);
    const [users, setUsers] = useState(mockUsers);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    async function usersDropdownPreload(){
        //call api
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        submitBug(formData);
        
    };

    function prepDataForSubmission(data) {
        const preparedData = {
            ...data,
            project: parseInt(data.project, 10), 
            assignedTo: parseInt(data.assignedTo, 10), 
            reportedBy: parseInt(data.reportedBy, 10) 
        };
    
    
        return preparedData;
    }

    async function submitBug(bug) {
        try {
            const bugData = prepDataForSubmission(bug);
            const data = await apiRequest('/bugs','post',bugData);
            //setLoading(false);

        } catch (error) {
            console.error("Error fetching bugs:", error);
            //setLoading(false);
        }
    }

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
                <select
                    type="number"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                >
                    {projects.map(project => (
                        <option key={project.id} value={project.id}>{project.name}</option>
                    ))}
                </select>
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
                <select
                    type="number"
                    id="assignedTo"
                    name="assignedTo"
                    value={formData.assignedTo}
                    onChange={handleChange}
                >
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="reportedBy">Reported By</label>
                <select
                    type="number"
                    id="reportedBy"
                    name="reportedBy"
                    value={formData.reportedBy}
                    onChange={handleChange}
                >
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
            </div>




            <button type="submit">Submit</button>
        </form>
    );
}

export default BugForm;
