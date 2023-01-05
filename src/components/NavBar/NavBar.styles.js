import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  margin: 20px;
  border-bottom: 1px solid #ccc9;
  margin-bottom: -10px;
  padding-bottom: 20px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  font-weight: bold;
  transition: font-size 300ms cubic-bezier(0.17, 0.67, 0.57, 0.95);
  &:hover {
    font-size: 18px;
  }
`;

export const StyledText = styled.span`
  background-color: #cccccc;
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px;
  margin: -5px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  min-width: 60px;
`;

export const AccountIconContainer = styled.div`
  display: flex;
  flex: 0.1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const NFTAidLogo = styled.img`
  width: 150px;
  height: 75px;
  cursor: pointer;
`;
