import styled from "styled-components";
// import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
// import Logo from "../../images/Cemex_logo.png";

export const Nav = styled.nav`
  background: #fff;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #293064;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.img`
  margin-right: 0.5rem;
  width: 200px;

`;

export const MobileIcon = styled.a`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
  }
`;

export const NavItem = styled.li`
  height: 40px;
  border-bottom: 4px solid transparent;

  &:hover {
    border-bottom: 4px solid #293064;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #293064;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  /* font-size: 20px; */
  
  &:active {
    color: #4B59F7;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    /* padding: 2rem; */
    width: 100%;
    display: table;
    /* font-size: 20px; */

    &:hover {
      
      color: #4b59f7;
      transition: all 0.3s ease;
      border-bottom: 5px solid #293064;
    }
  }
  
`;

export const NavItemBtn = styled.li`
 @media screen and (max-width: 960px) {
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     height: 70px;
 }
`;

export const NavBtnLink = styled(Link) `
    text-decoration:none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 5px 10px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    text-decoration: none;
`
