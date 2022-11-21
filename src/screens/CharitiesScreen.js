import React from "react";
import { NavBar } from "../components/NavBar/NavBar";

export const CharitiesScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <NavBar />
      <h1>Charities</h1>
    </div>
  );
};
