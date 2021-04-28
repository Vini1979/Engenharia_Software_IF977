import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const ContainerInter = styled.div`
  div {
    width: 99%;
    max-height: 160px;
    margin-bottom: 30px;
    border: 1px #000 solid;
    border-radius: 4px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  color: #000000;
  font-size: 14px;

  svg {
    width: 26px;
    height: 26px;
  }
`;
