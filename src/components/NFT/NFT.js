import React from "react";

import { useContext } from "react";
import { NFTContext, UserContext } from "../../Context.js";

import { StyledButton, StyledCaption, NFTSection } from "./NFT.styles.js";

export const NFT = ({ data, setShowModal }) => {
  const { setCurrentNFT } = useContext(NFTContext);
  const { currentUser } = useContext(UserContext);

  const isUserOwner = (NFT) =>
    currentUser && currentUser.docId === NFT.currentOwner?.id;

  const handleNFTClick = (selectedNFT) => {
    setCurrentNFT(selectedNFT);
    setShowModal(true);
  };

  return data.map((NFT) => {
    const { url, title } = NFT;
    return (
      <NFTSection>
        <img
          src={url}
          style={{
            border: "2px solid black",
            borderRadius: "30%",
            width: 250,
            height: 250,
          }}
          alt="."
        />
        <StyledCaption onClick={() => handleNFTClick(NFT)}>
          <h5>{title}</h5>
          {isUserOwner(NFT) ? (
            <StyledButton edit>View NFT</StyledButton>
          ) : (
            <StyledButton>Buy now</StyledButton>
          )}
        </StyledCaption>
      </NFTSection>
    );
  });
};
