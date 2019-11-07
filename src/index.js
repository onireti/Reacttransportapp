import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";
import Navbar from "./components/Navbar";
import footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />;
      <footer />;
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
