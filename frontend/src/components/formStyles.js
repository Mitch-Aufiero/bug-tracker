import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${props => props.isValid ? '#ccc' : 'red'};
  border-radius: 4px;
  box-sizing: border-box;
  
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  height: 130px; 
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  
`;


export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Section  = styled.div`
  grid-area:  ${props => props.gridArea };
  padding: ${props => props.padding || '0.25rem' };
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 0.25rem;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border-radius: 4px;
  font-size: 19px;
  color: white;
  border: 0px solid grey; 

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: translateY(0.135rem); 
  }
  
`;

