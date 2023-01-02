import React, { useState, useEffect, useContext } from "react";
import Modal from "react-modal";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import toast from "react-hot-toast";

import {
  CheckoutButton,
  BackButton,
  ToastText,
  ToastLink,
  EditButton,
} from "./NFTModal.styles";

import { getDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";
import { NFTContext, UserContext } from "../../Context";

import { db } from "../../firebase.config";
import { doc } from "firebase/firestore";

export const NFTModal = (props) => {
  const {
    currentNFT,
    setCurrentNFT,
    setCurrentNFTRef,
    setCurrentOwnerUserName,
    currentOwnerUserName,
  } = useContext(NFTContext);

  const { currentUser } = useContext(UserContext);

  let navigate = useNavigate();

  const getNFTRef = async () => {
    const currentNFTRef = doc(db, "nfts", `${currentNFT.docId}`);
    setCurrentNFTRef(currentNFTRef);
  };

  const toastPrompt = (
    <ToastText>
      You have to be logged in to buy NFTs <br />
      <ToastLink href="/login">Login.</ToastLink>
    </ToastText>
  );

  const handleCheckoutClick = (type) => {
    if (!currentUser) {
      toast.error(toastPrompt);
      return;
    }
    if (type === "edit") {
      navigate("/marketplace/sell-nft");
      return;
    } else if (type === "buy") {
      navigate("/marketplace/checkout");
      return;
    }
  };

  const handleModalClose = () => {
    props.setShowModal(false);
    setCurrentNFT(null);
  };

  const isUserOwner = (currentNFT) =>
    currentUser && currentUser.docId === currentNFT.currentOwner?.id;

  Modal.setAppElement(document.getElementById("root"));

  // Getting Current Owner value from currentOwner reference
  const getCurrentOwner = async () => {
    const userRef = currentNFT.currentOwner;
    if (!userRef) {
      setCurrentOwnerUserName("n/a");
      return;
    }
    const docSnap = await getDoc(userRef);
    const userData = docSnap.data();
    setCurrentOwnerUserName(userData.userName);
  };

  useEffect(() => {
    getCurrentOwner();
    getNFTRef();
  }, []);

  return (
    <Modal
      isOpen={props.showModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => props.setShowModal(false)}
      style={{
        overlay: overlayStyles,
        content: contentStyles,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={currentNFT.url}
          style={{
            borderRadius: "10%",
            width: 200,
            height: 250,
            border: "2px solid black",
            marginRight: 20,
          }}
          alt="."
        />
      </div>
      <div
        className="Content-div"
        style={{
          display: "flex",
          flexDirection: "column",
          borderLeft: "1px solid #000a",
          flex: 1,
          padding: 20,
        }}
      >
        <div
          className="NFT-title"
          style={{
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          <span style={{ fontSize: 35, fontWeight: "bold", marginBottom: 20 }}>
            {currentNFT.title}
          </span>
        </div>
        <div
          className="NFT-price"
          style={{
            borderRadius: 10,
            flexDirection: "column",
            backgroundColor: "#f0f0f0aa",
            padding: 10,
          }}
        >
          <h1>
            {currentNFT.ethPrice} ETH
            <span style={{ fontSize: 14, margin: "0px 10px", color: "grey" }}>
              ${currentNFT.price}
            </span>
          </h1>
        </div>
        <span style={{ fontSize: 16, marginTop: 30, fontWeight: "bold" }}>
          Current owner: {currentOwnerUserName}
        </span>
        <span style={{ fontSize: 14, marginTop: 30, fontWeight: "bold" }}>
          Artist: {currentNFT.artist}
        </span>
        <Tooltip
          title="Percent given to your chosen charity"
          arrow={true}
          slotProps={{
            tooltip: {
              sx: {
                bgcolor: "lightgrey",
                color: "black",
                textAlign: "center",
                fontSize: 13,
                maxWidth: 130,
                "& 	.MuiTooltip-arrow": {
                  color: "lightgrey",
                },
              },
            },
          }}
          TransitionComponent={Zoom}
          placement={"top"}
        >
          <span
            style={{
              alignSelf: "flex-end",
              fontSize: 12,
              marginTop: 5,
              color: "white",
              fontWeight: "bold",
              backgroundColor: "rgba(47, 17, 71, 0.8)",
              padding: 7,
              borderRadius: 20,
            }}
          >
            {currentNFT.percentToCharity}%
          </span>
        </Tooltip>
        <div
          className="button-div"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 40,
          }}
        >
          <BackButton darkOnHover onClick={handleModalClose}>
            Back
          </BackButton>
          {isUserOwner(currentNFT) ? (
            <EditButton onClick={() => handleCheckoutClick("edit")}>
              Edit Sale
            </EditButton>
          ) : (
            <CheckoutButton onClick={() => handleCheckoutClick("buy")}>
              Proceed to checkout
            </CheckoutButton>
          )}
        </div>
      </div>
    </Modal>
  );
};

const contentStyles = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  width: "50%",
  height: "50%",
  transform: "translate(40%, 25%)",
};

const overlayStyles = {
  backgroundColor: "rgba(255, 255, 255, 0.6)",
};
