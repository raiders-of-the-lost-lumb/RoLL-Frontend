import React from "react";
import styled from "styled-components";
import RoomInfo from "./RoomInfo";
import PlayerInfo from "./PlayerInfo";
import Actions from "./Actions";

const PanelDiv = styled.div`
  height: 100%
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

function SidePanel() {
  return (
    <PanelDiv>
      <RoomInfo></RoomInfo>
      <PlayerInfo></PlayerInfo>
      <Actions></Actions>
    </PanelDiv>
  );
}

export default SidePanel;
