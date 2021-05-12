import React from "react";
// import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
// import { Button } from "../../globalStyles";
import Logo from "../../images/Cemex_logo.png";
import {
  FooterContainer,
//   FooterSubscription,
//   FooterSubheading,
//   FooterSubText,
//   Form,
//   FormInput,
//   FooterLinksContainer,
//   FooterLinksWrapper,
//   FooterLinksItems,
//   FooterLinkTitle,
//   FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
          <SocialMediaWrap>
              <SocialLogo to="/">
                  <SocialIcon src={Logo}/>
              </SocialLogo>
              <WebsiteRights>CEMEX ® 2020</WebsiteRights>
              <SocialIcons>
                  <SocialIconLink href={"https://es-la.facebook.com/cemexmexico/"} target="_blank" aria-label="Facebook">
                      <FaFacebook/>
                  </SocialIconLink>
                  <SocialIconLink href={"https://www.instagram.com/cemexmx/?hl=es-la"} target="_blank" aria-label="Instagram">
                      <FaInstagram/>
                  </SocialIconLink>
                  <SocialIconLink href={"https://www.youtube.com/?hl=es-419&gl=MX"} target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                      <FaYoutube/>
                  </SocialIconLink>
                  <SocialIconLink href={"https://twitter.com/CEMEXMx?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"} target="_blank" aria-label="Twitter">
                      <FaTwitter/>
                  </SocialIconLink>
                  <SocialIconLink href={"https://www.linkedin.com/company/cemex/?originalSubdomain=mx"} target="_blank" aria-label="Linkedin">
                      <FaLinkedin/>
                  </SocialIconLink>
              </SocialIcons>
          </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
