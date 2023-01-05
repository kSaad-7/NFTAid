import React, { useContext } from "react";
import Menu from "@mui/material/Menu";
import { StyledMenuItem } from "./AccountMenu.styles";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context";

export const AccountMenu = (props) => {
  let navigate = useNavigate();

  const { setCurrentUser, currentUser } = useContext(UserContext);

  const handleClose = (event) => {
    if (event === "/Profile") {
      props.setAnchorEl(null);
      navigate("/Profile");
      return;
    } else if (event === "Sign out") {
      setCurrentUser(null);
      props.setAnchorEl(null);
      return;
    }
    props.setAnchorEl(null);
  };

  const handleSignIn = () => {
    navigate("/login");
    return;
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    props.setAnchorEl(null);
    return;
  };

  return (
    <div>
      <Menu
        anchorEl={props.anchorEl}
        disableAutoFocusItem={true}
        open={props.open}
        onClose={handleClose}
        sx={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        {currentUser ? (
          <StyledMenuItem onClick={() => handleClose("/Profile")}>
            Profile
          </StyledMenuItem>
        ) : (
          ""
        )}
        <StyledMenuItem onClick={handleClose}>Change wallet</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Languages</StyledMenuItem>
        {currentUser ? (
          <StyledMenuItem onClick={handleSignOut}>Log out</StyledMenuItem>
        ) : (
          <StyledMenuItem onClick={handleSignIn}>Login</StyledMenuItem>
        )}
      </Menu>
    </div>
  );
};
