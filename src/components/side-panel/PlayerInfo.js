import React from "react";
import styled from "styled-components";

const PlayerDiv = styled.div`
  padding: 5% 0 5% 0;
  width: 20%;
  background-color: #747474;

  div {
    margin: 0 5% 0 5%;
    font-size: 20px;
    display: flex;
    justify-content: space-between;

    h3 {
      margin-top: 2%;
      font-weight: bold;
      font-size: 20px;
    }
  }
`;

const PlayerStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    margin-bottom: 2%;
  }
`;

function PlayerInfo() {
  return (
    <PlayerDiv>
      <div>
        <h3>Player ####</h3>
        <h3>$100</h3>
      </div>
      <PlayerStats>
        <p>Encumbrance: 1</p>
        <p>Strength: 1</p>
        <p>Speed: 1</p>
        <p>Inventory:</p>
      </PlayerStats>
    </PlayerDiv>
  );
}

export default PlayerInfo;
