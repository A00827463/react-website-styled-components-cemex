import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import Logo from "../../images/Cemex_logo.png";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)
  const showButton = () => {
    if(window.innerWidth <=960) {
      setButton(true)
    }
    else{
      setButton(false)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon src={Logo} />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes color="#293064;"/> : <FaBars color="#293064;"/>}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/sign-up">Sign Up</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/login">
                    <Button primary >Login</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/login">
                    <Button fontBig primary>
                      Login
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
