import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./styles.css";

export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [alphabets, setAlphabets] = useState(["a", "b", "c"]);
  const [characters, setCharacters] = useState(["@", "&", "*"]);
  const [selectedVal, setSelectedVal] = useState("");

  const handleSelected = (e) => {
    setSelectedVal(e.target.value);
  };

  const handleReset = () => {
    setSelectedVal("");
  };
  console.log(selectedVal);
  return (
    <div className="App">
      <Dropdown options={numbers} onChange={handleSelected} />
      {selectedVal && (
        <div>
          <Dropdown options={alphabets} onChange={handleSelected} />
          <Dropdown options={characters} onChange={handleSelected} />
        </div>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
