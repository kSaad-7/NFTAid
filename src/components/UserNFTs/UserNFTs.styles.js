import styled from "styled-components";

export const StyledButton = styled.button`
  // background-color: #a26cd4;
  background-color: #f5dcff;
  border-radius: 12px;
  border: none;
  padding: 7px;
  min-width: 50px;
  margin-right: 4px;
  margin: 10px;
  // color: white;
  font-weight: bold;
  font-size: 12px;
  color: black;
  cursor: pointer;
`;

export const StyledCaption = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  color: white;
  align-items: center;
  // background-color: #f5dcff;
  background-color: #a26cd4;
  max-height: 40px;
  margin: 0px 70px;
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
  margin: 30px -20px;
  padding: 5px;
`;
