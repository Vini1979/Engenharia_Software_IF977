import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const AsideContainer = styled.div`
  position: relative;
  left: 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #8b8b83;

  h1 {
    font-size: 28px;
    color: #000000;
    text-align: center;
  }

  svg {
    width: 100px;
    height: 30px;
    position: absolute;
    left: 30px;
    color: #000000;
    cursor: pointer;
  }
`;

export const Main = styled.div`
  background-color: #ffffff;
  width: 81%;
  height: 85vh;
  margin: 0 auto;
  margin-top: 15px;
  border: 3px solid #8b8b83;
  border-radius: 8px;
  overflow-y: scroll;

  position: relative;

  button {
    position: absolute;
    right: 30px;
    margin-top: 25px;

    width: 80px;
    height: 40px;

    border-radius: 8px;

    background-color: #ffffff;
    color: #8b8b83;

    cursor: pointer;

    &:active {
      background-color: #8b8b83;
      transition: 0.2s;
      color: #000000;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-top: 20px;
  box-sizing: border-box;
`;
