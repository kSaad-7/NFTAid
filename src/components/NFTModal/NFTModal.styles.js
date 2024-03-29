import styled from "styled-components";

export const BackButton = styled.button`
  background-color: #ededed;
  border-radius: 12px;
  border: 1px solid #555;
  padding: 10px;
  min-width: 100px;
  min-height: 50px;
  color: #6a4091;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  ${(props) =>
    props.darkOnHover &&
    `
      &:hover {
        background-color: #ddde;
      }
    `}
`;

export const ToastText = styled.span`
  font-weight: 500;
  font-size: 15px;
  text-align: center;
`;

export const ToastLink = styled.a`
  font-weight: bold;
  font-size: 15px;
  color: blue;
`;

export const Image = styled.img`
  border-dadius: 15%;
  width: 200px;
  height: 250px;
  transform: translateY(30%);
  border: 2px solid black;
  margin-right: 20px;
`;

export const CheckoutButton = styled(BackButton)`
  background: linear-gradient(
    135deg,
    rgba(255, 217, 41, 1) 12%,
    rgba(49, 17, 89, 1) 12%
  );
  color: white;
  transition: box-shadow 200ms cubic-bezier(0.17, 0.67, 0.57, 0.95);
  &:hover {
    box-shadow: -1px 5px 0px black;
  }
`;

export const EditButton = styled.button`
  background: linear-gradient(
    135deg,
    rgba(255, 217, 41, 1) 80%,
    rgba(49, 17, 89, 1) 80%
  );
  border-radius: 7px;
  border: 1px solid #555;
  padding: 10px;
  min-width: 100px;
  min-height: 50px;
  color: black;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  transition: box-shadow 200ms cubic-bezier(0.17, 0.67, 0.57, 0.95);
  &:hover {
    box-shadow: -1px 5px 0px black;
  }
`;
