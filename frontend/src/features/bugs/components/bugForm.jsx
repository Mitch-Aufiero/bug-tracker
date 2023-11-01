import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../../api/api';
import { Label, Input, Select, Button } from '../../../components/formStyles.js'
import styled from 'styled-components';

const mockUsers = [
    { id: 1, name: 'Mortimer Cat\'O Darkness' },
    { id: 2, name: 'Obi Flamepoint' },

];

const Statuses = ['New', 'In Progress', 'Resolved', 'Closed'];
const Severities = ['Low', 'Medium', 'High', 'Critical'];
const Types = ['Functional Bug', 'Performance Bug', 'UI Bug'];


const FormContainer = styled.form`
    display: grid;
    height: 100%;
    color: grey;
    
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "title title title side"
        "type severity project side"
        "desc desc desc side";
    text-align: left;
    grid-gap: 0.25rem;
`;
const TitleSection = styled.div`
    grid-area: title;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
   
`;

const TypeSection = styled.div`
    grid-area: type;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
`;
const SeveritySection = styled.div`
    grid-area: severity;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
`;
const ProjectSection = styled.div`
    grid-area: project;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
`;
const DescSection = styled.div`
    grid-area: desc;
    padding: 0.25rem
    display: flex;
    flex-direction: column;
`;
const SideSection = styled.div`
    grid-area: side;
    padding: 2.25rem;
    display: flex;
    flex-direction: column;
`;
function BugForm() {
    const [formData, setFormData] = useState({
        title: '',
        type: 'Functional Bug',
        severity: 'Low',
        project: '',
        description: '',
        status: 'New',
        assignedTo: '',
        reportedBy: '',
    });
    const [users, setUsers] = useState(mockUsers);
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetchProjects();

    }, []);

    async function fetchProjects() {
        try {
            const data = await apiRequest('/projects');
            setProjects(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    }
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };




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
            const data = await apiRequest('/bugs', 'post', bugData);
            //setLoading(false);

        } catch (error) {
            console.error("Error fetching bugs:", error);
            //setLoading(false);
        }
    }

    return (

        <FormContainer onSubmit={handleSubmit}>
            <TitleSection>
                <Label htmlFor="title">Title</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </TitleSection>
            <TypeSection>
                <Label htmlFor="type">Bug Type</Label>
                <Select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    {Types.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </Select>
            </TypeSection>
            <SeveritySection>
                <Label htmlFor="severity">Severity</Label>
                <Select
                    id="severity"
                    name="severity"
                    value={formData.severity}
                    onChange={handleChange}
                >
                    {Severities.map(severity => (
                        <option key={severity} value={severity}>{severity}</option>
                    ))}
                </Select>
            </SeveritySection>
            <ProjectSection>
                <Label htmlFor="project">Project</Label>
                <Select
                    type="number"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                >
                    {projects.map(project => (
                        <option key={project.project_id} value={project.project_id}>{project.name}</option>
                    ))}
                </Select>
            </ProjectSection>
            <DescSection>
                <Label htmlFor="description">Description</Label>
                <Input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </DescSection>
            <SideSection>
                <Button type="submit">Submit</Button>
                <Label htmlFor="status">Status</Label>
                <Select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    {Statuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                    ))}
                </Select>

                <Label htmlFor="assignedTo">Assigned To</Label>
                <Select
                    type="number"
                    id="assignedTo"
                    name="assignedTo"
                    value={formData.assignedTo}
                    onChange={handleChange}
                >
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </Select>

                <Label htmlFor="reportedBy">Reported By</Label>
                <Select
                    type="number"
                    id="reportedBy"
                    name="reportedBy"
                    value={formData.reportedBy}
                    onChange={handleChange}
                >
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </Select>
            </SideSection>

        </FormContainer>
    );
}

export default BugForm;
