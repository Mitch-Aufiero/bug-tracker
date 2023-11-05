import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  background: #2B2118;
  color: #ECF0F1;
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
`;


export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

export const NavSection = styled.div`
  display: flex;
  ${props => props.alignment === 'right' && `margin-left: auto; margin-right:0;`}
  ${props => props.alignment === 'left' && `margin-right: auto;`}


  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export const NavItem = styled.li`
  padding: 5px 10px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ECF0F1;
    }
  }
`;

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
  }

  &:active {
    transform: translateY(0.135rem); 
  }
`;

export const BreadcrumbsContainer = styled.nav`
  padding: 8px 16px;
  background: #F7F3E3;
`;

export const BreadcrumbItem = styled.div`
  display: inline;
  color: #2B2118;
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
