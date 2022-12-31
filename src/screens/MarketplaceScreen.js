import React, { useState, useEffect, useContext } from "react";

import { NFT } from "../components/NFT/NFT.js";
import { NavBar } from "../components/NavBar/NavBar";
import { NFTModal } from "../components/NFTModal/NFTModal.js";
import { Footer } from "../components/Footer/Footer.js";

import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { UserContext } from "../Context.js";

// TODO : Put "onSale" field onto every nft, change on purchase
// TODO : Querey NFTs "onSale = true"
// ! TODO : Make new state, userNfts, queries "nfts" where currentOwner = currentUser
// TODO : Create new section above <NFT/> where users NFTs are displayed. (conditonally render the secition on if user logged in)
// TODO : New section = Same as NFT, .map() but "Sell now" instead of "Buy now"

export const MarketplaceScreen = () => {
  const [data, setData] = useState(null);
  const [usersNFTs, setUsersNFTs] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentNFT, setCurrentNFT] = useState(null);

  const { currentUser } = useContext(UserContext);

  const getNFTData = async () => {
    try {
      const allDocuments = await getDocs(collection(db, "nfts"));
      const nftData = allDocuments.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }));
      setData(nftData);

      if (currentUser) {
        const allUserNFTs = nftData.filter(
          (nft) => nft.currentOwner?.id === currentUser?.docId
        );
        setUsersNFTs(allUserNFTs);
        console.log("User NFTs", allUserNFTs);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNFTData();
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
