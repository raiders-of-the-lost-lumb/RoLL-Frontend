import React from "react";
import styled from "styled-components";

const Bottom = styled.div`
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  background-color: #747474;
`;

function BottomBar() {
  return (
    <Bottom>
      <p>You have moved north.</p>
    </Bottom>
  );
}

export default BottomBar;
