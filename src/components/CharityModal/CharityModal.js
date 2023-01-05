import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import { CharitySection } from "./CharitySection/CharitySection";

import { db } from "../../firebase.config";
import { getDocs, collection } from "firebase/firestore";

export const CharityModal = ({
  showCharityModal,
  setShowCharityModal,
  charity,
  setCharity,
}) => {
  const [charitiesData, setCharitiesData] = useState(null);

  const fetchCharities = async () => {
    try {
      const allDocuments = await getDocs(collection(db, "charities"));
      const charities = allDocuments.docs.map((doc) => doc.data());
      setCharitiesData(charities);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCharities();
  }, []);

  Modal.setAppElement(document.getElementById("root"));

  return (
    <Modal
      isOpen={showCharityModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setShowCharityModal(false)}
      style={{
        overlay: overlayStyles,
        content: contentStyles,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h4>Choose your charity</h4>
      </div>
      <CharitySection
        charitiesData={charitiesData}
        setShowCharityModal={setShowCharityModal}
        setCharity={setCharity}
      />
    </Modal>
  );
};

const contentStyles = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  width: "40%",
  height: "40%",
  transform: "translate(60%, 50%)",
};

const overlayStyles = {
  backgroundColor: "rgba(255, 255, 255, 0.6)",
};
