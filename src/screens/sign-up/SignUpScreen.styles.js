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
  width: 400;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SignUpDiv = styled.div`
  margin-top: 20;
  text-align: center;
  flex-direction: column;
  display: flex;
  flex: 1;
  width: 100%;
  max-height: 87%;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 60px;
  padding-right: 60px;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const TermsDiv = styled.div`
  display: flex;
  width: 180%;
`;

export const DividerDiv = styled.div`
  margin-top: 15px;
`;

export const CryptoIconsDiv = styled.div`
  margin-top: 20px;
`;

export const SignUpButton = styled.button`
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
`;

export const CryptoIcon = styled.img`
  margin: 5px 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const LoginText = styled.a`
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
  color: #a26cd4;
`;
