import React, { useState, useEffect, useMemo } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Section } from '../../../components/gridStyles'; 
import List from './List';
import { fetchBugs, selectCriticalBugs,selectBugsBySeverity, selectBugsByAssignee, selectBugsByProjectId } from '../../bugs/slices/bugSlice';
import { fetchusers } from '../../users/slices/UserSlice';


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
    const {items: users} = useSelector(state => state.users || {});

    useEffect(() => {
        dispatch(fetchBugs());
        dispatch(fetchusers());
    }, [dispatch]);


    const criticalBugsWithUsernames =  useMemo(() => { 
       return criticalBugs.map(bug => {
        const user = users.find(user => user.user_id === bug.assigned_to);
        return {
          ...bug,
          username: user ? user.username : 'Unknown'
        };
      });
    }, [criticalBugs,users]);

    const bugsByAssigneeWithUsernames =  useMemo(() => { 
        return bugsByAssignee.map(bug => {
         const user = users.find(user => user.user_id === bug.name);
         return {
           ...bug,
           username: user ? user.username : 'Unknown'
         };
       });
     }, [bugsByAssignee,users]);

    return (
        <GridArea>
            <Section gridArea='title'>
                <h3>{project.name}</h3>
            </Section>
            <Section gridArea='header'>
                <select>Actions</select>
            </Section>
            <Section gridArea='topbugs'>
                <label>Top Bugs</label>
                <List data={criticalBugsWithUsernames} renderFormat={bug=>`${bug.title} - ${bug.username}`}/>
            </Section>
            <Section gridArea='status'>
                <label>Bugs by Status</label>
                <List data={bugsBySeverity} renderFormat={severity=>`${severity.name} - ${severity.count}`}/>
            </Section>
            <Section gridArea='assignees'>
                <label>Bugs by Assignee</label>
                <List data={bugsByAssigneeWithUsernames} renderFormat={assignee=>`${assignee.username} - ${assignee.count}`}/>
            </Section>
        </GridArea>
    );
}

export default ProjectCard;
