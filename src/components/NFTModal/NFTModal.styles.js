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
    255deg,
    rgba(121, 88, 150, 1) 0%,
    rgba(47, 17, 71, 1) 100%
  );
  color: white;
  transition: box-shadow 400ms cubic-bezier(0.17, 0.67, 0.57, 0.95);
  &:hover {
    box-shadow: 0px 1px 5px black;
  }
`;
