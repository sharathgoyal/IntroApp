import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  function tick() {
    setCurrentTime(new Date());
  }

  return (
    <div className="App App-body">
      <div className="Subheader">
        <div>Date: {currentTime.toLocaleDateString()}</div>
        <div>Time: {currentTime.toLocaleTimeString()}</div>
      </div>
      <div>
        <div>Hello! This is Sharath Goyal Rachakonda.</div>
        <div>Welcome to My App</div>
      </div>
    </div>
  );
}

export default App;
