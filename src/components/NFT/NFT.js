import React from "react";
import { StyledButton, StyledCaption, NFTSection } from "./NFT.styles.js";

export const NFT = ({ data, setShowModal, setCurrentNFT }) => {
  //Clicked NFT is passed as parameter, sets it as the currentNFT and shows NFTMoal component
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
            borderRadius: "50%",
            width: 250,
            height: 250,
          }}
          alt="."
        />
        <StyledCaption onClick={() => handleNFTClick(NFT)}>
          <h5>{title}</h5>
          <StyledButton>Buy now</StyledButton>
        </StyledCaption>
      </NFTSection>
    );
  });
};
