import React from "react";
import Modal from "react-modal";
import { CheckoutButton, BackButton } from "./NFTModal.styles";

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

export const NFTModal = (props) => {
  //Function for when "back" button is clicked
  const handleModalClose = () => {
    props.setShowModal(false);
    props.setCurrentNFT(null);
  };

  Modal.setAppElement(document.getElementById("root"));

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
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 0.5 }}>
          <span style={{ fontSize: 12, fontWeight: "bold", marginLeft: 15 }}>
            NFT #1503
          </span>
        </div>
        <img
          src={props.currentNFT.thumbnailUrl}
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
            {props.currentNFT.title.slice(0, 4)}
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
            1.2 ETH
            <span style={{ fontSize: 14, margin: "0px 10px", color: "grey" }}>
              $200
            </span>
          </h1>
        </div>
        <span style={{ fontSize: 16, marginTop: 30, fontWeight: "bold" }}>
          Current owner: sKarma77
        </span>
        <span style={{ fontSize: 14, marginTop: 30, fontWeight: "bold" }}>
          Artist: Varez
        </span>
        <div
          className="button-div"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 70,
          }}
        >
          <BackButton darkOnHover onClick={handleModalClose}>
            Back
          </BackButton>
          <CheckoutButton onClick={console.log("Checkout page.")}>
            Proceed to checkout
          </CheckoutButton>
        </div>
      </div>
    </Modal>
  );
};
