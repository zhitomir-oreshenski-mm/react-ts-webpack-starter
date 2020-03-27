import React from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
  return (
    <div>
      <h1>TS with webpack starter</h1>
    </div>
  );
}

const root = document.getElementById("app");

ReactDOM.render(<App />, root);
