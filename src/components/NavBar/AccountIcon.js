import React, { useState } from "react";
import { StyledText, AccountIconContainer } from "./NavBar.styles";
import { AccountMenu } from "./AccountMenu/AccountMenu";

export const AccountIcon = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleIconHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AccountIconContainer>
      <div onMouseOver={handleIconHover} onMouse>
        <img
          src={require("./AccountIcon.png")}
          alt="x"
          style={{
            margin: 5,
            maxHeight: 48,
            maxWidth: 48,
            borderRadius: 7,
          }}
        />
      </div>
      <StyledText>0x456...345</StyledText>
      <AccountMenu
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </AccountIconContainer>
  );
};
