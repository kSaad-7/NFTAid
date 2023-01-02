import React, { useState, useEffect, useContext } from "react";

import { NFT } from "../components/NFT/NFT.js";
import { NavBar } from "../components/NavBar/NavBar";
import { NFTModal } from "../components/NFTModal/NFTModal.js";
import { Footer } from "../components/Footer/Footer.js";
import { UserNFTs } from "../components/UserNFTs/UserNFTs";

import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { UserContext } from "../Context.js";

//  TODO : Make "Your nfts" section more noticiable
//  TODO : "Edit now" for NFTs that are owned by user, on marketplace

export const MarketplaceScreen = () => {
  const [data, setData] = useState(null);
  const [usersNFTs, setUsersNFTs] = useState(null);
  const [marketplaceNFTS, setMarketplaceNFTS] = useState(null);
  const [numberOfUserNFTs, setNumberOfUserNFTs] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentNFT, setCurrentNFT] = useState(null);

  const { currentUser } = useContext(UserContext);

  const getNFTData = async () => {
    try {
      // all nfts
      const nftsRef = collection(db, "nfts");
      const allDocuments = await getDocs(nftsRef);
      const nftData = allDocuments.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }));
      setData(nftData);

      // marketplace nfts
      const marketplaceNFTS = nftData.filter((nft) => nft.onSale === true);
      setMarketplaceNFTS(marketplaceNFTS);

      // user nfts
      let count = 0;
      if (currentUser) {
        const allUserNFTs = nftData.filter(
          (nft) =>
            nft.currentOwner?.id === currentUser?.docId && nft.onSale === false
        );
        setUsersNFTs(allUserNFTs);
        console.log("User NFTs", allUserNFTs);
        for (let i = 0; i < allUserNFTs.length; i++) {
          count += 1;
        }
        setNumberOfUserNFTs(count);
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
        textAlign: "center",
      }}
    >
      <NavBar />
      {usersNFTs && currentUser && (
        <div>
          <h5>Your NFTS ({numberOfUserNFTs})</h5>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              overflowX: "scroll",
              whiteSpace: "nowrap",
              marginBottom: 50,
              backgroundColor: "#444",
            }}
          >
            <UserNFTs usersNFTs={usersNFTs} setShowModal={setShowModal} />
          </div>
        </div>
      )}

      <a
        href="#marketplace"
        id="marketplace-scrolling-text"
        style={{ marginTop: 30 }}
      >
        Marketplace
      </a>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: 50,
        }}
        id="marketplace"
      >
        <NFT
          data={marketplaceNFTS}
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
