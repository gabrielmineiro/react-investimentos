import styled from "styled-components";

export const H1 = styled.h1`
  color: #2f329f;
`;

export const Div = styled.div`
  animation-duration: 8s;
  animation-name: off;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  display: flex;
  justify-content: center;

  @keyframes off {
    from {
      margin-top: 0%;
      width: 100%;
    }

    to {
      margin-top: 40%;
      width: 100%;
    }
  }
  img {
    width: 15rem;
  }
`;
