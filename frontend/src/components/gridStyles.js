import styled from 'styled-components';

export const Section  = styled.div`
  grid-area:  ${props => props.gridArea };
  padding: ${props => props.padding || '0.25rem' };
  display: flex;
  flex-direction: column;
`;