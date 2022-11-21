import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #a26cd4;
  border-radius: 12px;
  border: none;
  padding: 7px;
  min-width: 50px;
  margin-left: 4px;
  color: white;
  cursor: pointer;
`;

export const StyledCaption = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5dcff;
  max-height: 40px;
  margin: 0px 40px;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.6s cubic-bezier(0.1, 1, 0.1, 1);
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.7);
  }
`;

export const NFTSection = styled.div`
min-width: 25%;
text-align: center;
align-items: center;
justify-content: center;
margin: 50px 0px;
padding: 5px;
`;