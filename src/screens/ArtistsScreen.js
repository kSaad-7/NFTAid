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
      <h1>Artists</h1>
    </div>
  );
};
