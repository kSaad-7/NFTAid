import React from "react";
import ReactModal from 'react-modal';

export const NFTModal = (props) => {
  const handleModalClose = () => {
    props.setShowModal(false);
    props.setCurrentNFT(null);
  };

  return (
    <ReactModal isOpen={props.showModal}>
      <button onClick={handleModalClose}>Close modal</button>
      <h1>{props.currentNFT.title}</h1>
    </ReactModal>
    // <div>
    //   <div className="content">
    //     <div className="header">
    //       <h1>{props.currentNFT.title}</h1>
    //     </div>
    //     <div className="body">
    //       <h1>Body of modal</h1>
    //     </div>
    //     <div className="footer">
    //       <button onClick={handleModalClose}>Close modal.</button>
    //     </div>
    //   </div>
    // </div>
  );
};
