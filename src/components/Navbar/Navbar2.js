import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle, FaMedal, FaClipboardList, FaHome } from "react-icons/fa";
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
      setButton(false)
    }
    else{
      setButton(true)
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
                <NavLinks to="/"><FaHome style={{color:"#293064", fontSize:"25px", paddingRight:"5px"}}/>Home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/instrucciones"><FaClipboardList style={{color:"#293064", fontSize:"20px", paddingRight:"5px"}}/>Instructions</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/leaderboard"><FaMedal style={{color:"#293064", fontSize:"25px", paddingRight:"5px"}}/>Leaderboard</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/perfil"><FaUserCircle style={{color:"#293064", fontSize:"25px", paddingRight:"5px"}}/>Profile</NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/admin">
                    <Button secondary>Admin</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/admin">
                    <Button fontBig secondary>
                      Admin
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
