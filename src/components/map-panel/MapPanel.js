import React from "react";
import styled from "styled-components";

const MapDiv = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

function MapPanel() {
  return (
    <MapDiv>
      <p>MAP</p>
    </MapDiv>
  );
}

export default MapPanel;
