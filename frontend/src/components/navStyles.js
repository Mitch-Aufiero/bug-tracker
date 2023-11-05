import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCreateButtonLink = styled(Link)`
  padding: 10px 20px;
  width: 100px;
  margin-left: auto;
  margin-right: 2;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 44%,#00DDEB);
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: #0056b3;
  }

  &:active {
    transform: translateY(0.135rem); 
  }
`;

export const BreadcrumbsContainer = styled.nav`
  padding: 8px 16px;
  background: #f5f5f5;
`;

export const BreadcrumbItem = styled.div`
  display: inline;

  &::after {
    content: '>>';
    padding: 0 8px;
  }

  &:not(:first-child)::before {
    content: '>>';
    padding: 0 8px;
  }

  &:last-child::after {
    content: '';
  }
`;

export const BreadcrumbLink = styled(Link)`
  text-decoration: none;
  color: #0275d8;

  
  &:hover {
    text-decoration: underline;
  }
`;
