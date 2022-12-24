import React from "react";
import { AccountIcon } from "./AccountIcon";
import { StyledNavLink, NavBarContainer, NFTAidLogo } from "./NavBar.styles";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  let navigate = useNavigate();
  return (
    <NavBarContainer>
      <NFTAidLogo
        alt="Logo"
        src={require("../../images/logo4.png")}
        onClick={() => navigate("/")}
      />
      <StyledNavLink className="nav-bar" to="/artists">
        Artists
      </StyledNavLink>
      <StyledNavLink className="nav-bar" to="/marketplace">
        Marketplace
      </StyledNavLink>
      <StyledNavLink className="nav-bar" to="/profile">
        Profile
      </StyledNavLink>
      <StyledNavLink className="nav-bar" to="/charities">
        Charities
      </StyledNavLink>
      <StyledNavLink className="nav-bar" to="/emergency-aid">
        Emergency aid
      </StyledNavLink>
      <AccountIcon></AccountIcon>
    </NavBarContainer>
  );
};
