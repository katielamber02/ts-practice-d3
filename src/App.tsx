import React, { useRef, useEffect } from "react";

import "./App.css";

import { select } from "d3-selection";

const App: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    console.log(select(svgRef.current));
  });

  //   Selection {_groups: Array(1), _parents: Array(1)}
  // _groups: Array(1)
  // 0: [svg]
  // length: 1

  return (
    <div className="App">
      <svg ref={svgRef} />
    </div>
  );
};

export default App;
