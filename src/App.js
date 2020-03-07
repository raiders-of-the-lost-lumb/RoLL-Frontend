import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import TitleBar from "./components/title-bar/TitleBar";
import SidePanel from "./components/side-panel/SidePanel";
import MapPanel from "./components/map-panel/MapPanel";
import BottomBar from "./components/map-panel/BottomBar";

function App() {
  return (
    <div className="App">
      <TitleBar></TitleBar>
      {/* <div className="middle">
        <MapPanel></MapPanel>
        <SidePanel></SidePanel>
      </middle> */}
      <div className="panels">
        <div className="middle">
          <MapPanel></MapPanel>
          <BottomBar></BottomBar>
        </div>
        <SidePanel></SidePanel>
      </div>
    </div>
  );
}

export default App;
