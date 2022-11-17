import React from "react";
import { AccountIcon } from "./AccountIcon";

export const NavBar = () => {
  return (
    <div
      style={{
        backgroundColor: "purple",
        margin: 20,
        borderBottom: "1px solid grey",
        marginBottom: 50,
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img alt="Logo" src={require('./logo4.png')} style={{width: 200, height: 100}} />
      <h3>Marketplace</h3>
      <h3>Artists</h3>
      <h3>Profile</h3>
      <h3>Charities</h3>
      <h3>Emergency aid</h3>
      <AccountIcon></AccountIcon>
    </div>
  );
};
