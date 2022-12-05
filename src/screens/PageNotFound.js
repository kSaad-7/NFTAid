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
      <NavLink to="/" id="pageNotFoundLink">
        <h3>
          Click here to go to{" "}
          <span style={{ fontWeight: "bold", fontSize: 15, color: "purple" }}>
            NFTAid
          </span>
        </h3>
      </NavLink>
    </div>
  );
};
