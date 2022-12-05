import React from "react";
import { NavBar } from "../components/NavBar/NavBar";

export const EmergencyAidScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <NavBar />
      <h1>Emergency aid</h1>
    </div>
  );
};
