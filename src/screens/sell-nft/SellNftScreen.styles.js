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

export const NFTDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
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

export const CancelSaleButton = styled.button`
  background-color: red;
  border-radius: 12px;
  border: 1px solid #555;
  padding: 10px;
  min-width: 90px;
  min-height: 15px;
  color: #6a4091;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  color: white;
  margin-right: 20px;
`;

export const ConfirmEditButton = styled.button`
  background: linear-gradient(
    135deg,
    rgba(255, 217, 41, 1) 80%,
    rgba(49, 17, 89, 1) 80%
  );
  border-radius: 7px;
  border: 1px solid #555;
  padding: 10px;
  width: 150px;
  height: 40px;
  color: black;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  transition: box-shadow 200ms cubic-bezier(0.17, 0.67, 0.57, 0.95);
  &:hover {
    box-shadow: 0px 3px 3px black;
  }
`;

export const SettingsInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SettingDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PriceInput = styled.input`
  margin-left: 10px;
  width: 10%;
  height: 40%;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 14px;
  font-weight: bold;
`;

export const DollarPrice = styled.span`
  font-weight: bold;
  font-size: 12px;
  margin-left: 10px;
  color: grey;
`;

export const ETHText = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-left: 5px;
  color: black;
`;
