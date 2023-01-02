import React, { useContext } from "react";
import { NFTContext } from "../../Context";
import Modal from "react-modal";

import { db } from "../../firebase.config";
import { doc, updateDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

import { CancelButton, DeleteButton } from "./CancelSaleModal.styles";

export const CancelSaleModal = ({ showCancelModal, setShowCancelModal }) => {
  Modal.setAppElement(document.getElementById("root"));

  const navigate = useNavigate();
  const { currentNFT } = useContext(NFTContext);

  const handleCancelClick = () => {
    setShowCancelModal(false);
  };

  const handleDeleteSaleClick = async () => {
    const currentNFTRef = doc(db, "nfts", `${currentNFT.docId}`);
    // update onSale to true
    await updateDoc(currentNFTRef, { onSale: false });
    setShowCancelModal(false);
    navigate("/marketplace");
    return;
  };

  return (
    <Modal
      isOpen={showCancelModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setShowCancelModal(false)}
      style={{
        overlay: overlayStyles,
        content: contentStyles,
      }}
    >
      <div style={{ display: "flex", textAlign: "center" }}>
        <h4>Are you sure you want to take this NFT off the marketplace?</h4>
      </div>
      <div style={{ alignSelf: "end" }}>
        <CancelButton darkOnHover onClick={handleCancelClick}>
          Cancel
        </CancelButton>
        <DeleteButton onClick={handleDeleteSaleClick}>Delete</DeleteButton>
      </div>
    </Modal>
  );
};

const contentStyles = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  width: "30%",
  height: "20%",
  transform: "translate(95%, 80%)",
};

const overlayStyles = {
  backgroundColor: "rgba(255, 255, 255, 0.6)",
};
