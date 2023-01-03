import React from "react";
import { useContext } from "react";
import { NFTContext } from "../../Context.js";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledCaption, NFTSection } from "./UserNFTs.styles.js";

export const UserNFTs = ({ usersNFTs }) => {
  const { setCurrentNFT } = useContext(NFTContext);

  const navigate = useNavigate();

  //Clicked NFT is passed as parameter, sets it as the currentNFT and shows NFTMoal component
  const handleNFTClick = (selectedNFT) => {
    setCurrentNFT(selectedNFT);
    navigate("/marketplace/sell-nft");
  };

  return usersNFTs.map((NFT) => {
    const { url, title } = NFT;
    return (
      <NFTSection>
        <h5 style={{ color: "white" }}>{title}</h5>
        <img
          src={url}
          style={{
            border: "2px solid white",
            borderRadius: "50%",
            width: 150,
            height: 150,
          }}
          alt="."
        />
        <StyledCaption onClick={() => handleNFTClick(NFT)}>
          <StyledButton>Sell NFT</StyledButton>
        </StyledCaption>
      </NFTSection>
    );
  });
};
