import React from "react";
import { NavBar } from "../components/NavBar/NavBar";

export const ProfileScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <NavBar/>
      <h1>Profile</h1>
    </div>
  );
};
