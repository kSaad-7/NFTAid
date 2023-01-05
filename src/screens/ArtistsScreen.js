import React from "react";
import { NavBar } from "../components/NavBar/NavBar";

export const ArtistsScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <h2 style={{ color: "grey" }}>Coming soon...</h2>
      </div>
    </div>
  );
};
