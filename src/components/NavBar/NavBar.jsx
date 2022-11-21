import React from "react";
import { AccountIcon } from "./AccountIcon";
import { StyledNavLink, NavBarContainer } from "./NavBar.styles";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <img
        alt="Logo"
        src={require("./logo4.png")}
        style={{ width: 150, height: 75 }}
      />
      <StyledNavLink to="/Artists">
        Artists
      </StyledNavLink>
      <StyledNavLink to="/">
        Marketplace
      </StyledNavLink>
      <StyledNavLink to="/Profile">
        Profile
      </StyledNavLink>
      <StyledNavLink to="/Charities">
        Charities
      </StyledNavLink>
      <StyledNavLink to="/EmergencyAid">
        Emergency aid
      </StyledNavLink>
      <AccountIcon></AccountIcon>
    </NavBarContainer>
  );
};
