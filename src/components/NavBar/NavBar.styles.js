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

  &.active {
    color: white;
    background-color: #8554b3;
    padding: 7px;
    border-radius: 10px;
  }
  transition: font-size 300ms cubic-bezier(0.17, 0.67, 0.57, 0.95);
  &:hover {
    font-size: 18px;
  }
`;
