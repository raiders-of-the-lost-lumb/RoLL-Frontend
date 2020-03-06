import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  height: 100%;
  font-size: 50px;
  color: white;
  background-color: #747474;

  p {
    margin: 0 0 0 20%;
  }
`;

function TitleBar() {
  return (
    <Title>
      <p>Raiders of the Last Lumb</p>
    </Title>
  );
}

export default TitleBar;
