import { styled } from "styled-components";

export const Corpo = styled.div`
  width: 100%;
  display: flex;
  min-height: 100dvh;
  flex-wrap: wrap;
  justify-content: center;
  & h3 {
    margin: 32px 0 0;
    width: 100%;
    text-align: center;
    font-size: 1em;
    font-weight: 500;
    color: #bababa;
  }
  & h2 {
    width: 100%;
    text-align: center;
    margin: 0 0 16px 0;
    font-size: 2em;
    font-weight: 900;
    line-height: 85%;
  }
  & > table {
    margin: 32px 0;
    border-spacing: 0;
    text-align: center;
    border: 2px solid #121212;
    & th {
      font-size: 20px;
      color: #fff;
      padding: 16px 16px;
    }
    & td {
      padding: 6px 16px;
    }
    & tr:nth-child(even) {
      background-color: #121212;
    }
  }
`;
