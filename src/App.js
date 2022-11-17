import React, { useState, useEffect } from "react";
import "./App.css";
import { NFT } from "./NFT.js";
import { NavBar } from "./NavBar.js";
import { NFTModal } from "./NFTModal.js";

export default function App() {
  
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentNFT, setCurrentNFT] = useState(null);

  const API_URL = "https://jsonplaceholder.typicode.com/albums/1/photos";

  const fetchData = async () => {
    const response = await (await fetch(API_URL)).json();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return <h1>Loading...</h1>;

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <NavBar></NavBar>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <NFT
          data={data}
          setShowModal={setShowModal}
          setCurrentNFT={setCurrentNFT}
        />
        {showModal && (
          <NFTModal
            setCurrentNFT={setCurrentNFT}
            setShowModal={setShowModal}
            currentNFT={currentNFT}
            showModal={showModal}
          />
        )}
      </div>
    </div>
  );
}
