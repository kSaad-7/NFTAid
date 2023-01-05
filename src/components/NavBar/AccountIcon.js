import React, { useState, useContext } from "react";
import { StyledText, AccountIconContainer } from "./NavBar.styles";
import { AccountMenu } from "./AccountMenu/AccountMenu";

import { UserContext } from "../../Context";

export const AccountIcon = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleIconHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const { currentUser } = useContext(UserContext);

  return (
    <AccountIconContainer>
      <div onMouseOver={handleIconHover} className="accountIcon">
        <img
          src={require("../../images/AccountIcon.png")}
          alt="x"
          style={{
            margin: 5,
            maxHeight: 48,
            maxWidth: 48,
            borderRadius: 7,
          }}
        />
      </div>
      <StyledText>
        {!currentUser ? (
          <a href="/login" className="user-icon-login">
            Login
          </a>
        ) : (
          <span>
            {currentUser.wallet.slice(0, 4)}...{currentUser.wallet.slice(9, 13)}
          </span>
        )}
      </StyledText>
      <AccountMenu open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </AccountIconContainer>
  );
};
