import React, { useRef, useEffect, useState } from "react";

import "./App.css";

import { select, Selection } from "d3-selection";

const mydata = [
  { units: 150, color: "purple" },
  { units: 100, color: "red" },
  { units: 50, color: "blue" }
];

const App: React.FC = () => {
  const svgRef = useRef(null);

  const [selection, setSelection] = useState<null | Selection<
    null,
    {},
    null,
    undefined
  >>(null);

  useEffect(() => {
    if (!selection) {
      setSelection(select(svgRef.current));
    } else {
      selection
        .selectAll("rect")
        .data(mydata)
        .attr("width", 100)
        .attr("height", d => d.units)
        .attr("fill", d => d.color)
        .attr("x", (_, i) => i * 100);
    }
  }, [selection]);

  return (
    <div className="App">
      <svg ref={svgRef}>
        <rect />
        <rect />
        <rect />
      </svg>
    </div>
  );
};

export default App;

// CONSOLE DOM ELEMENT
// Selection {_groups: Array(1), _parents: Array(1)}
// _groups: Array(1)

// 0: svg
// __data__:
// width: 200
// heigth: 150
// color: "orange"
