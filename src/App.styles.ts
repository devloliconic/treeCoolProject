import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 9, 85, 1) 87%
  );
`;

export const TreeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Tree = styled.div`
  margin-top: 20px;
  min-height: 1000px;
  max-width: 1000px;

  width: 500px;

  flex-basis: 50%;

  background: gray;
  border-radius: 12px;

  padding: 20px;
`;
