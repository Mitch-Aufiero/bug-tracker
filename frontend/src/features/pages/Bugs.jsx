import React from 'react';
import {StyledCreateButtonLink, BreadcrumbsContainer, BreadcrumbLink, BreadcrumbItem} from '../../components/navStyles'
import { Section } from '../../components/gridStyles';
import BugsTable from '../bugs/components/bugsTable';
import styled from 'styled-components';

const PageContainer = styled.div`
    display: grid;
    height: 100vh;
    color: #2B2118;
    
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 1fr 1fr 1fr;
    grid-template-areas:
        "bread bread create create"
        "table table table table"
        "table table table table"
        "table table table table";
    text-align: left;
    grid-gap: 0.25rem;
`;

function Bugs() {
    return (
      <PageContainer>
        <Section gridArea='bread'>
          <BreadcrumbsContainer>
            <BreadcrumbItem>All Bugs</BreadcrumbItem>
          </BreadcrumbsContainer>
        </Section>
        <Section gridArea='create'>
          <StyledCreateButtonLink to="/create-bug" className="my-button-class">
            New Bug
          </StyledCreateButtonLink>
        </Section>
        <Section gridArea='table'>
          <BugsTable></BugsTable>
        </Section>
      </PageContainer>
    );
  }
  
  export default Bugs;