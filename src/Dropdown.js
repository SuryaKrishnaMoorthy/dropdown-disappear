import React, { useState } from "react";

const Dropdown = ({ onChange, options }) => {
  return (
    <select onChange={onChange}>
      {options.map((opt, i) => {
        return (
          <option key={i} value={opt}>
            {opt}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
