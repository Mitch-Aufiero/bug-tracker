import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { apiRequest } from '../../../api/api';
import { fetchBugs } from '../slices/bugSlice';
import { Label, Input, Select, Button, Section, TextArea } from '../../../components/formStyles.js'

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
        "desc desc desc side"
        "desc desc desc side";
    text-align: left;
    grid-gap: 0.25rem;
`;
function BugForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        type: 'Functional Bug',
        severity: 'Low',
        project_id: 1,
        description: '',
        status: 'New',
        assignedTo: '',
        reportedBy: '',
    });
    const [users, setUsers] = useState(mockUsers);
    const [projects, setProjects] = useState([]);
    const [isTitleValid, setIsTitleValid] = useState(true);


    useEffect(() => {

        fetchProjects();

    }, []);

    async function fetchProjects() {
        try {
            const data = await apiRequest('/projects');
            setProjects(data);
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
        if(formData.title.length < 3){
            setIsTitleValid(false);
        }else{
            submitBug(formData);
        }

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
            dispatch(fetchBugs()); 
            //setLoading(false);
            setFormData({        title: '',
                type: 'Functional Bug',
                severity: 'Low',
                project_id: bug.project_id,
                description: '',
                status: 'New',
                assignedTo: '',
                reportedBy: '',
            });

        } catch (error) {
            console.error("Error fetching bugs:", error);
            //setLoading(false);
        }
    }

    return (

        <FormContainer onSubmit={handleSubmit}>
            <Section gridArea='title'>
                <Label htmlFor="title">Title</Label>
                <Input
                    type="text"
                    id="title"
                    name="title"
                    isValid={isTitleValid}
                    value={formData.title}
                    onChange={handleChange}
                />
            </Section>
            <Section gridArea='type'>
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
            </Section>
            <Section gridArea='severity'>
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
            </Section>
            <Section gridArea='project'>
                <Label htmlFor="project">Project</Label>
                <Select
                    id="project"
                    name="project"
                    value={formData.project_id}
                    onChange={handleChange}
                >
                    {projects.map(project => (
                        <option key={project.project_id} value={project.project_id}>{project.name}</option>
                    ))}
                </Select>
            </Section>
            <Section gridArea='desc'>
                <Label htmlFor="description">Description</Label>
                <TextArea
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </Section>
            <Section gridArea='side' padding='2.25rem'>
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
            </Section>

        </FormContainer>
    );
}

export default BugForm;
