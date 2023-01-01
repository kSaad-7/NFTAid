import React, { useState, useEffect, useContext } from "react";

import { NFT } from "../components/NFT/NFT.js";
import { NavBar } from "../components/NavBar/NavBar";
import { NFTModal } from "../components/NFTModal/NFTModal.js";
import { Footer } from "../components/Footer/Footer.js";
import { UserNFTs } from "../components/UserNFTs/UserNFTs";

import { db } from "../firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { UserContext } from "../Context.js";

// TODO : Put "onSale" field onto every nft, change on purchase
// TODO : Querey NFTs "onSale = true"
// ! TODO : Make new state, userNfts, queries "nfts" where currentOwner = currentUser
// TODO : Create new section above <NFT/> where users NFTs are displayed. (conditonally render the secition on if user logged in)
// TODO : New section = Same as NFT, .map() but "Sell now" instead of "Buy now"

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
      {usersNFTs && (
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
