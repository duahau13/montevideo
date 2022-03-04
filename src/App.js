import React from "react";
import grist from "./grist-plugin-api.js";

function App() {
  const datum = async (cmd) => {
    grist.ready();
    grist.onRecord((data) => cmd.output(data));
    return;
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>{datum.Name}</code> and save to reload.!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
