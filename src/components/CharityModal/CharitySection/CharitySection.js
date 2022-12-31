import React from "react";

import { Container } from "./CharitySection.styles";

export const CharitySection = ({
  charitiesData,
  setCharity,
  setShowCharityModal,
}) => {
  if (!charitiesData) return <div></div>;

  const handleCharityClick = (selectedCharity) => {
    setCharity(selectedCharity.name);
    setShowCharityModal(false);
  };

  return charitiesData.map((charity) => {
    return (
      <Container onClick={() => handleCharityClick(charity)}>
        <div>
          <h4>{charity.name}</h4>
        </div>
      </Container>
    );
  });
};
