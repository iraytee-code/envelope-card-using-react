import React from "react";
import SenderDetails from "./components/SenderDetails";
import ReceiverDetails from "./components/ReceiverDetails";
import Stamp from "./components/Stamp";

function App() {
  return (
    <div className="App">
      <div className="wrapper-sender">
        <SenderDetails />
        <Stamp />
      </div>
      <div className="wrapper-receiver">
        <ReceiverDetails />
      </div>
    </div>
  );
}

export default App;
