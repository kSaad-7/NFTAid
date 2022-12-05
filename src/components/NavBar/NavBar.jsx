import React from "react";
import { AccountIcon } from "./AccountIcon";
import { StyledNavLink, NavBarContainer } from "./NavBar.styles";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <img
        alt="Logo"
        src={require("../../images/logo4.png")}
        style={{ width: 150, height: 75 }}
      />
      <StyledNavLink className="nav-bar" to="/Artists">
        Artists
      </StyledNavLink>
      <StyledNavLink className="nav-bar" to="/">
        Marketplace
      </StyledNavLink>
      <StyledNavLink className="nav-bar" to="/Profile">
        Profile
      </StyledNavLink>
      <StyledNavLink
        className="nav-bar"
        to="/Charities"
        style={({ isActive }) =>
          isActive
            ? {
                color: "#fff",
                background: "red",
              }
            : { color: "#545e6f", background: "#f0f0f0" }
        }
      >
        Charities
      </StyledNavLink>
      <StyledNavLink className="nav-bar" to="/emergency-aid">
        Emergency aid
      </StyledNavLink>
      <AccountIcon></AccountIcon>
    </NavBarContainer>
  );
};
