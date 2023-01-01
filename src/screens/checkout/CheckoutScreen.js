import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import {
  CheckoutButton,
  BackIconDiv,
  StlyedContainer,
  StlyedDiv,
  CheckoutDiv,
  BottomSectionDiv,
  TermsDiv,
  DividerDiv,
  CharityButton,
  NFTDetailsDiv,
  StyledDiv,
} from "./CheckoutScreen.styles.js";
import Divider from "@mui/material/Divider";

import toast from "react-hot-toast";

import { CharityModal } from "../../components/CharityModal/CharityModal";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { NFTContext, UserContext } from "../../Context";

import { db } from "../../firebase.config";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

export const CheckoutScreen = () => {
  const [termsCheck, setTermsCheck] = useState(false);

  const [charity, setCharity] = useState(null);
  const [showCharityModal, setShowCharityModal] = useState(false);

  const navigate = useNavigate();
  //Getting context
  const { currentNFT, currentOwnerUserName } = useContext(NFTContext);

  const { currentUser } = useContext(UserContext);

  const handleTermsChange = (e) => {
    setTermsCheck(e.target.checked);
  };

  const validateCheckout = () => {
    if (!charity || !termsCheck) {
      return false;
    }
    return true;
  };

  const updateBackend = async () => {
    const currentNFTRef = doc(db, "nfts", `${currentNFT.docId}`);
    const currentUserRef = doc(db, "users", `${currentUser.docId}`);
    const currentOwnerRef = currentNFT.currentOwner;

    //update NFT document with new owner
    await updateDoc(currentNFTRef, {
      currentOwner: currentUserRef,
    });

    //update old owners document, delete nft from -> nfts[]
    if (currentOwnerRef) {
      await updateDoc(currentOwnerRef, {
        nfts: arrayRemove(currentNFTRef),
      });
    }

    //update currentUser document, add new nft -> nft[]
    await updateDoc(currentUserRef, {
      nfts: arrayUnion(currentNFTRef),
    });
  };

  const nftTitle = (
    <span>
      You successfully bought
      <span style={{ color: "purple" }}> {currentNFT.title}</span>
    </span>
  );

  const handleCheckout = () => {
    const isValid = validateCheckout();
    if (isValid) {
      updateBackend();
      toast.success(nftTitle);
      navigate("/marketplace");
      return;
    }
    toast.error("Please choose a charity and accept terms and conditions.");
  };

  return (
    <StlyedContainer>
      <StlyedDiv>
        <img
          alt="Logo"
          src={require("../../images/logo4.png")}
          style={{ width: 150, height: 80 }}
        />
        <CheckoutDiv>
          <BackIconDiv onClick={() => navigate(-1)}>
            <ArrowBackIcon fontSize="small" />
          </BackIconDiv>
          <NFTDetailsDiv>
            <StyledDiv>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginBottom: 13,
                    fontStyle: "italic",
                  }}
                >
                  {currentNFT.title}
                </span>
                <img
                  src={currentNFT.url}
                  style={{
                    borderRadius: "20%",
                    width: 150,
                    height: 150,
                    border: "2px solid black",
                  }}
                  alt="."
                />
              </div>
              <div
                className="infoDiv"
                style={{ paddingLeft: 50, textAlign: "left" }}
              >
                <h4>Artist: {currentNFT.artist}</h4>
                <h4>Owner: {currentOwnerUserName}</h4>
                <h4>Percent to charity: {currentNFT.percentToCharity}</h4>
              </div>
            </StyledDiv>
            <div className="bottomSection" style={{ marginTop: 20 }}>
              <h2>
                {currentNFT.ethPrice} ETH
                <span
                  style={{ fontSize: 12, margin: "0px 10px", color: "grey" }}
                >
                  ${currentNFT.price}
                </span>
              </h2>
            </div>
          </NFTDetailsDiv>
          <BottomSectionDiv>
            <DividerDiv>
              <Divider />
            </DividerDiv>
            <CharityButton onClick={() => setShowCharityModal(true)}>
              {!charity ? "Choose a charity " : `${charity}`}
            </CharityButton>
            {showCharityModal && (
              <CharityModal
                setShowCharityModal={setShowCharityModal}
                showCharityModal={showCharityModal}
                charity={charity}
                setCharity={setCharity}
              />
            )}
            <TermsDiv>
              <Checkbox
                checked={termsCheck}
                onChange={(e) => handleTermsChange(e)}
              />
              <h5>
                I agree to the{" "}
                <span
                  id="terms_and_condtions"
                  onClick={() => window.open("https://coinbase.com")}
                >
                  terms and condtions
                </span>
              </h5>
            </TermsDiv>
            <div className="sign-up-button-box">
              <button class="button" onClick={handleCheckout}>
                Purchase
              </button>
            </div>
          </BottomSectionDiv>
        </CheckoutDiv>
      </StlyedDiv>
    </StlyedContainer>
  );
};
