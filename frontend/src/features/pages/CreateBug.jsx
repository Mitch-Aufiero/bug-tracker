import React from 'react';
import styled from 'styled-components';
import BugForm from '../bugs/components/bugForm';
import {StyledCreateButtonLink, BreadcrumbsContainer, BreadcrumbLink, BreadcrumbItem} from '../../components/navStyles'
import { Section } from '../../components/gridStyles';

const PageContainer = styled.div`
    display: grid;
    height: 50vh;
    color: grey;
    
    grid-template-columns: auto 1fr ;
    grid-template-rows: auto 1fr ;
    grid-template-areas:
        "bread back"
        "form form ";
    text-align: left;
    grid-gap: 0.25rem;
`;


function CreateBug() {
    return (
      <PageContainer>
        <Section gridArea='bread'>
          <BreadcrumbsContainer>
            <BreadcrumbLink to='/bugs'>Bugs</BreadcrumbLink>
            <BreadcrumbItem>Create Bug</BreadcrumbItem>
          </BreadcrumbsContainer>
        </Section>
        <Section gridArea='blank'>

        </Section>
        <Section gridArea='form'>
          <BugForm></BugForm>
        </Section>
      </PageContainer>
    );
  }
  
  export default CreateBug;