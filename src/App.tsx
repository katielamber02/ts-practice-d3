import React, { useRef, useEffect, useState } from "react";

import "./App.css";

import { select, Selection } from "d3-selection";
import { scaleLinear } from "d3-scale";

const data = [
  {
    name: "foo",
    units: 1000,
    color: "red"
  },
  {
    name: "bar",
    units: 1200,
    color: "blue"
  },
  {
    name: "baz",
    units: 1350,
    color: "orange"
  },
  {
    name: "hoge",
    units: 900,
    color: "purple"
  }
];

const App: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const y = scaleLinear()
    .domain([0, 10000])
    .range([0, 800]);

  const [selection, setSelection] = useState<null | Selection<
    SVGSVGElement | null,
    {},
    null,
    undefined
  >>(null);

  useEffect(() => {
    if (!selection) {
      setSelection(select(svgRef.current));
    } else {
      // will show the rect height:
      console.log(y(3500)); // 280
      console.log(y(4500)); // 360
      console.log(y(5500)); //440.0000006
    }
  }, [selection, y]);

  return (
    <div className="App">
      <svg ref={svgRef} width={800} height={800}></svg>
    </div>
  );
};

export default App;
