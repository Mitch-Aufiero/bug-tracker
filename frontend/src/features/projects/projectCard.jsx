import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Section } from '../../components/gridStyles'; 
import BugList from './BugList';
import { fetchBugs } from '../bugs/slices/bugSlice';

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
        "topbugs criticalbugs assignees"
        "topbugs criticalbugs assignees"
        "topbugs criticalbugs assignees";
    text-align: left;
    grid-gap: 0.25rem;
`;

const ProjectCard = () => {
    const dispatch = useDispatch();
    const {items: bugs, loading} = useSelector(state => state.bugs || {});


    useEffect(() => {
        dispatch(fetchBugs());
    }, [dispatch]);

    
    return (
        <GridArea>
            <Section gridArea='title'>
                <label>Project Alpha</label>
            </Section>
            <Section gridArea='header'>
                <select>Actions</select>
            </Section>
            <Section gridArea='topbugs'>
                <label>Top Bugs</label>
                <BugList bugs={bugs}/>
            </Section>
            <Section gridArea='criticalbugs'>
            <label>Critical Bugs</label>
                <BugList bugs={bugs}/>
            </Section>
            <Section gridArea='assignees'>
            <label>Bugs by Assignee</label>
                <BugList bugs={bugs}/>
            </Section>
        </GridArea>
    );
}

export default ProjectCard;
