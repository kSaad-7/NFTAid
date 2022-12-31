import styled from "styled-components";

export const StlyedContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StlyedDiv = styled.div`
  display: flex;
  flex: 1;
  width: 400px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const BackIconDiv = styled.div`
  position: relative;
  align-self: flex-start;
  right: 55px;
  top: 5px;
  cursor: pointer;
`;

export const CheckoutDiv = styled.div`
  margin-top: 20;
  text-align: center;
  flex-direction: column;
  display: flex;
  flex: 1;
  width: 100%;
  max-height: 70%;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 60px;
  padding-right: 60px;
`;

export const NFTDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BottomSectionDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const TermsDiv = styled.div`
  display: flex;
  width: 180%;
`;

export const DividerDiv = styled.div`
  margin-bottom: 20px;
`;

export const CheckoutButton = styled.button`
  background-color: #a26cd4;
  border-radius: 12px;
  border: 1px solid #555;
  padding: 10px;
  min-width: 130px;
  min-height: 30px;
  color: #6a4091;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  color: white;
  margin-top: 10px;
`;

export const CharityButton = styled.button`

  backgroundColor: #f0f0f0aa,
  margin: 20px;
  border-radius: 7px;
  border: 1px solid #f0f0f0aa;
  padding: 10px;
  min-width: 150px;
  min-height: 50px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  color: black;
  transition: box-shadow 100ms cubic-bezier(0.17, 0.67, 0.57, 0.95);
  &:hover {
    box-shadow: 0px 1px 5px black;
  }
`;
