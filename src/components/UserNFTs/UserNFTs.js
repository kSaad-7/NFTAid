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
        <h5>{title}</h5>
        <img
          src={url}
          style={{
            border: "2px solid black",
            borderRadius: "50%",
            width: 100,
            height: 100,
          }}
          alt="."
        />
        <StyledCaption onClick={() => handleNFTClick(NFT)}>
          <StyledButton>Sell now</StyledButton>
        </StyledCaption>
      </NFTSection>
    );
  });
};
