import React, { useState, useEffect } from "react";
import { NFT } from "../components/NFT/NFT.js";
import { NavBar } from "../components/NavBar/NavBar";
import { NFTModal } from "../components/NFTModal/NFTModal.js";
import { Footer } from "../components/Footer/Footer.js";

// import { db } from "../firebase.config";
// import { collection, getDocs } from "firebase/firestore";

export const MarketplaceScreen = () => {
  const [data, setData] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [currentNFT, setCurrentNFT] = useState(null);

  // const getNFTData = async (e) => {
  //   try {
  //     const allDocuments = await getDocs(collection(db, "nfts"));
  //     const usersData = allDocuments.docs.map((doc) => doc.data());
  //     setData(usersData);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   getNFTData();
  // }, []);

  // !<img src={require("../../images/AccountIcon.png")}  alt="x" !/>

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
          marginBottom: 50,
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
      <Footer />
    </div>
  );
};
