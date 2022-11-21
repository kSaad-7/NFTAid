import React from "react";
import { NavLink } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>404 Page not found</h1>
      <h4>Did you press the wrong link?</h4>
      <NavLink to="/" id="pageNotFoundLink">
        <h3>Click here to go to our real website.</h3>
      </NavLink>
    </div>
  );
};
