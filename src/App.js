import "./App.css";
import React, { useState } from "react";

const Button = (props) => {
  const turnOff = () => {
    props.defv(false);
  };

  const turnOn = () => {
    props.defv(true);
  };
  return (
    <div>
      <button style={{ color: props.truev ? "violet" : null }} onClick={turnOn}>
        ON
      </button>
      <button
        style={{ color: props.truev ? null : "violet" }}
        onClick={turnOff}
      >
        OFF
      </button>
    </div>
  );
};

const Fb = ({ v1, v2, v3 }) => {
  return (
    <div>
      {v1 && v2 && v3 === true ? <button>GO</button> : <button>NO WAY</button>}
    </div>
  );
};

function App() {
  const [val, setVal] = useState(true);
  const [val2, setVal2] = useState(true);
  const [val3, setVal3] = useState(true);
  return (
    <div className="App">
      <h1>Ready To Go</h1>
      <Button truev={val} defv={setVal} />
      <Button truev={val2} defv={setVal2} />
      <Button truev={val3} defv={setVal3} />

      <Fb v1={val} v2={val2} v3={val3} />
    </div>
  );
}

export default App;
