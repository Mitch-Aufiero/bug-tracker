import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Section } from '../../../components/gridStyles'; 
import List from './List';
import { fetchBugs, selectCriticalBugs,selectBugsBySeverity, selectBugsByAssignee, selectBugsByProjectId } from '../../bugs/slices/bugSlice';

import styled from 'styled-components';



const GridArea = styled.form`
    display: grid;
    height: 100%;
    color: grey;
    border: solid medium;
    border-radius: 5px;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "title title header"
        "topbugs status assignees"
        "topbugs status assignees"
        "topbugs status assignees";
    text-align: left;
    grid-gap: 0.25rem;
`;

const ProjectCard = ({project}) => {
    const dispatch = useDispatch();
    const bugs = useSelector(selectBugsByProjectId(project.project_id))
    const criticalBugs = selectCriticalBugs(bugs);
    const bugsBySeverity = selectBugsBySeverity(bugs);
    const bugsByAssignee = selectBugsByAssignee(bugs);

    useEffect(() => {
        dispatch(fetchBugs());
    }, [dispatch]);


    return (
        <GridArea>
            <Section gridArea='title'>
                <label>{project.name}</label>
            </Section>
            <Section gridArea='header'>
                <select>Actions</select>
            </Section>
            <Section gridArea='topbugs'>
                <label>Top Bugs</label>
                <List data={criticalBugs} renderFormat={bug=>`${bug.title} - ${bug.assigned_to}`}/>
            </Section>
            <Section gridArea='status'>
                <label>Bugs by Status</label>
                <List data={bugsBySeverity} renderFormat={severity=>`${severity.name} - ${severity.count}`}/>
            </Section>
            <Section gridArea='assignees'>
                <label>Bugs by Assignee</label>
                <List data={bugsByAssignee} renderFormat={severity=>`${severity.name} - ${severity.count}`}/>
            </Section>
        </GridArea>
    );
}

export default ProjectCard;