import styled from "styled-components";

export const Span = styled.span`
  font-size: 10px;
  color: #bd2a33;
  margin-top: -1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const Div = styled.div`
  width: 43rem;
  height: 25rem;
  background-color: #f9f9fb;
  display: flex;
  flex-direction: row;

  margin-top: 10rem;

  border-radius: 0.3rem;

  box-shadow: 2px 2px 15px 2px gray;
`;

export const DivForm = styled.div`
  width: 50%;
  height: 23rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  p {
    font-size: 25px;
    font-weight: 700;
    color: rgb(83, 83, 83);
  }

  label {
    color: gray;
    font-weight: 500;
    font-size: 15px;
  }
  input {
    width: 16rem;
    height: 2rem;
    border-radius: 0.2rem;
    border: none;
    box-shadow: 1px 2px 2px 2px rgb(230, 229, 229);
    margin-bottom: 1.5rem;
    margin-top: 0.2rem;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    border: 2px solid #00c9d2;
  }
  input::placeholder {
    font-size: 11px;
    color: gray;
  }
`;

export const DivReturn = styled.div`
  width: 40.5%;
  height: 100%;
  background-color: rgb(230, 229, 229);
  display: flex;
  align-items: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(230, 229, 229);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #4180ab;
    border-radius: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 2rem;
    height: 15rem;
    .title {
      font-size: 25px;
      font-weight: 600;
      color: #2b4e72;
    }
    i {
      color: #4180ab;
      font-size: 18px;
      margin-bottom: 1.5rem;
    }
  }
`;
