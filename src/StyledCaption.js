
import styled from "styled-components";

export const StyledCaption = styled.div`
 display: flex;
 flex: 1;
 justify-content: center;
 align-items: center;
 background-color: #F5DCFF;
 max-height: 40px;
 transition: box-shadow 0.6s cubic-bezier(0.1, 1, 0.1, 1);
 margin: 0px 40px;
 border-radius: 10px;
 cursor: pointer;
 &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.7);
  }
`;
