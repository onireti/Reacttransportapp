import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />;
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
