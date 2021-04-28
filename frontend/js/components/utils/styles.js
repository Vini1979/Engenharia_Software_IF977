import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  margin-bottom: 20px;

  margin-top: 20px;
  input {
    font-size: 0.9rem;
    color: #000000;
    background: transparent;

    width: 20rem;
    height: 19px;
    padding: 1rem 3.2rem 1rem 1.2rem;
    min-width: 18rem;

    border-radius: 0.2rem;
    border: 2px solid #8b8b83;

    transtion: border-color 0.2;

    &:focus {
      border-color: #8b8b83;
    }

    &:focus + p,
    &:not(:placeholder-shown) + p {
      top: 0;
      font-size: 1rem;
      color: #000000;
    }

    &:not(:focus) + p {
      color: #8b8b83;
    }
  }

  p {
    color: #f9f9f9;
    font-size: 1.2rem;
    user-select: none;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    margin-left: 0.8rem;
    padding: 0 0.4rem;

    background: #ffffff;

    transition: top 0.2s, font-size 0.2s, color 0.2s;
  }
`;
