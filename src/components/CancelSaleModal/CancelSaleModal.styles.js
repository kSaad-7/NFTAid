import styled from "styled-components";

export const CancelButton = styled.button`
  background-color: #ededed;
  border-radius: 12px;
  border: 1px solid #555;
  padding: 10px;
  min-width: 50px;
  min-height: 40px;
  color: black;
  margin-right: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 13px;
  ${(props) =>
    props.darkOnHover &&
    `
      &:hover {
        background-color: #ddde;
      }
    `}
`;

export const DeleteButton = styled.button`
  background-color: red;
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid #555;
  padding: 10px;
  min-width: 80px;
  color: white;
  min-height: 40px;
  font-weight: bold;
  font-size: 15px;
`;
