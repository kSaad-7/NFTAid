import React from "react";
import Menu from "@mui/material/Menu";
import { StyledMenuItem } from "./AccountMenu.styles";
import { useNavigate } from "react-router-dom";

export const AccountMenu = (props) => {
  let navigate = useNavigate();
  const handleClose = (page) => {
    if (page === "/Profile") {
      props.setAnchorEl(null);
      navigate("/Profile");
      return;
    }
    props.setAnchorEl(null);
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
        <StyledMenuItem onClick={() => handleClose("/Profile")}>
          Profile
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Change wallet</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Languages</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Sign out</StyledMenuItem>
      </Menu>
    </div>
  );
};
