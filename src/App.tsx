import React, { useRef, useEffect, useState } from "react";

import "./App.css";

import { select, Selection } from "d3-selection";

const mydata = [{ width: 200, heigth: 150, color: "orange" }];

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
      // joining data to a single element
      selection
        .append("rect")
        .data(mydata)
        .attr("width", d => d.width)
        .attr("height", d => d.heigth)
        .attr("fill", d => d.color);
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
