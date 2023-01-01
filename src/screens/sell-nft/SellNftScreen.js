import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import {
  BackIconDiv,
  StlyedContainer,
  StlyedDiv,
  CheckoutDiv,
  BottomSectionDiv,
  TermsDiv,
  DividerDiv,
  SettingsInfoDiv,
  DollarPrice,
  SettingDiv,
  NFTDiv,
  ETHText,
  PriceInput,
} from "./SellNftScreen.styles.js";
import Divider from "@mui/material/Divider";

import toast from "react-hot-toast";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { NFTContext, UserContext } from "../../Context";

import { db } from "../../firebase.config";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

export const SellNftScreen = () => {
  const [termsCheck, setTermsCheck] = useState(false);
  const [ethPrice, setEthPrice] = useState(null);
  const [charityPercent, setCharityPercent] = useState(20);

  const navigate = useNavigate();
  //Getting context
  const { currentNFT } = useContext(NFTContext);
  const { currentUser } = useContext(UserContext);

  const handlePriceChange = (e) => {
    setEthPrice(e.target.value);
  };

  const handleSliderChange = (e) => {
    setCharityPercent(e.target.value);
  };

  const handleTermsChange = (e) => {
    setTermsCheck(e.target.checked);
  };

  const validateSale = () => {
    if (!ethPrice || !termsCheck || ethPrice < 0.01) {
      return false;
    }
    return true;
  };

  const updateBackend = async () => {
    // const currentNFTRef = doc(db, "nfts", `${currentNFT.docId}`);
    // const currentUserRef = doc(db, "users", `${currentUser.docId}`);
    // const currentOwnerRef = currentNFT.currentOwner;

    // //update NFT document with new owner
    // await updateDoc(currentNFTRef, {
    //   currentOwner: currentUserRef,
    // });

    // //update old owners document, delete nft from -> nfts[]
    // if (currentOwnerRef) {
    //   await updateDoc(currentOwnerRef, {
    //     nfts: arrayRemove(currentNFTRef),
    //   });
    // }

    // //update currentUser document, add new nft -> nft[]
    // await updateDoc(currentUserRef, {
    //   nfts: arrayUnion(currentNFTRef),
    // });
    console.log("updateBackend");
  };

  const toastMessage = (
    <span>
      You successfully put
      <span style={{ color: "purple" }}> {currentNFT.title}</span> on the
      market.
    </span>
  );

  const handleCheckout = () => {
    const isValid = validateSale();
    if (isValid) {
      updateBackend();
      toast.success(toastMessage);
      navigate("/marketplace");
      return;
    }
    toast.error("Please fill in all the fields correctly.");
  };

  const ethDollarRatio = 991;
  const dollarPrice = ethPrice * ethDollarRatio;

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
          <NFTDiv>
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
          </NFTDiv>
          <BottomSectionDiv>
            <DividerDiv>
              <Divider />
            </DividerDiv>
            <SettingsInfoDiv>
              <SettingDiv>
                <h4>Set price:</h4>
                <PriceInput
                  type="number"
                  onChange={handlePriceChange}
                  step={0.1}
                  min="0"
                ></PriceInput>
                <ETHText>ETH</ETHText>
                {ethPrice > 0 && (
                  <DollarPrice>${dollarPrice.toFixed(2)} </DollarPrice>
                )}
              </SettingDiv>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4>{charityPercent}% to chosen charity</h4>
                <Slider
                  sx={{
                    color: "purple",
                    height: 7,
                  }}
                  onChange={handleSliderChange}
                  defaultValue={20}
                  min={20}
                  step={1}
                  marks={sliderMarks}
                  valueLabelDisplay="auto"
                />
              </div>
            </SettingsInfoDiv>
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
              <button class="fifth" onClick={handleCheckout}>
                Sell NFT
              </button>
            </div>
          </BottomSectionDiv>
        </CheckoutDiv>
      </StlyedDiv>
    </StlyedContainer>
  );
};

const sliderMarks = [
  {
    value: 0,
    label: "20%",
  },
  {
    value: 25,
    label: "25%",
  },
  {
    value: 50,
    label: "50%",
  },
  {
    value: 75,
    label: "75%",
  },
  {
    value: 100,
    label: "100%",
  },
];
