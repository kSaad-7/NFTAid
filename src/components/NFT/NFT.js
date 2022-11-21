import React from "react";
import { StyledButton, StyledCaption, NFTSection } from "./NFT.styles.js";

export const NFT = ({ data, setShowModal, setCurrentNFT }) => {
  //Clicked NFT is passed as parameter, sets it as the currentNFT and shows NFTMoal component
  const handleNFTClick = (selectedNFT) => {
    setCurrentNFT(selectedNFT);
    setShowModal(true);
  };

  return data.map((NFT) => {
    const { thumbnailUrl, title } = NFT;
    return (
      <NFTSection>
        <img src={thumbnailUrl} style={{ borderRadius: "50%", width: 250, height: 250, }} alt="." />
        <StyledCaption onClick={() => handleNFTClick(NFT)}>
          <h5>{title.slice(0, 4)}</h5>
          <StyledButton>Buy now</StyledButton>
        </StyledCaption>
      </NFTSection>
    );
  });
};
