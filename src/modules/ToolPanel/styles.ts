import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  & > :not(:last-child) {
    margin-right: 20px;
  }
`;
