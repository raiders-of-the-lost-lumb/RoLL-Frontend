import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import TitleBar from "./components/title-bar/TitleBar";
import SidePanel from "./components/side-panel/SidePanel";

function App() {
  return (
    <div className="App">
      <TitleBar></TitleBar>
      <SidePanel></SidePanel>
    </div>
  );
}

export default App;
