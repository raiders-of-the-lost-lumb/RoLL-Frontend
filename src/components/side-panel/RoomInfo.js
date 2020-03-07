import React from "react";
import styled from "styled-components";

const RoomDiv = styled.div`
  width: 100%;
  height: 32vh;
  background-color: #c4c4c4;
  margin-bottom: 0;
  padding-bottom: 5%;

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

const RoomStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: 5%;
  }

  p {
    margin-bottom: 5%;
  }
`;

function RoomInfo() {
  return (
    <RoomDiv>
      <div>
        <h3>Room 425</h3>
        <h3>(55, 125)</h3>
      </div>
      <RoomStats>
        <h3>Misty Room</h3>
        <p>Exits: N, E, W</p>
        <p>Items: None</p>
        <p>Players: Player ####, King</p>
      </RoomStats>
    </RoomDiv>
  );
}

export default RoomInfo;
