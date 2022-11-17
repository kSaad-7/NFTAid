import React, { useState } from "react";
import { StyledButton } from "./StyledButton.js";
import { StyledCaption } from "./StyledCaption.js";

export const NFT = ({ data, setShowModal, setCurrentNFT}) => {

  const handleNFTClick = (selectedNFT) => {
    setCurrentNFT(selectedNFT);
    setShowModal(true);
  };

  return data.map((NFT) => {
    const { thumbnailUrl} = NFT;
    let title = "LucoStar / by Uzzy";
    return (
      <div
        style={{
          minWidth: "25%",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          margin: 30,
          padding: 5,
        }}
      >
        <img src={thumbnailUrl} style={{ borderRadius: "50%" }} alt="." />
        <StyledCaption>
          <h5>{title}</h5>
          <StyledButton onClick={() => handleNFTClick(NFT)}>
            Buy now
          </StyledButton>
        </StyledCaption>
      </div>
    );
  });
};
