import React, { useState, useEffect } from "react";
import { NFT } from "../components/NFT/NFT.js";
import { NavBar } from "../components/NavBar/NavBar";
import { NFTModal } from "../components/NFTModal/NFTModal.js";

export const MarketplaceScreen = () => {
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

  if (!data)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );

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
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
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
};
