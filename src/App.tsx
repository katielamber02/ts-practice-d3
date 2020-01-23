import React, { useRef, useEffect, useState } from "react";

import "./App.css";

import { select, Selection } from "d3-selection";

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
        .append("rect")
        .attr("height", 100)
        .attr("width", 200)
        .attr("fill", "purple")
        .attr("rect");
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

//   Selection {_groups: Array(1), _parents: Array(1)}
// _groups: Array(1)
//   0: [svg]
//   length: 1
// _parents: [null]

// constructor: ƒ Selection(groups, parents)
// select: ƒ (select)
// selectAll: ƒ (select)
// filter: ƒ (match)
// data: ƒ (value, key)
// enter: ƒ ()
// exit: ƒ ()
// join: ƒ (onenter, onupdate, onexit)
// merge: ƒ (selection)
// order: ƒ ()
// sort: ƒ (compare)
// call: ƒ ()
// nodes: ƒ ()
// node: ƒ ()
// size: ƒ ()
// empty: ƒ ()
// each: ƒ (callback)
// attr: ƒ (name, value)
// style: ƒ (name, value, priority)
// property: ƒ (name, value)
// classed: ƒ (name, value)
// text: ƒ (value)
// html: ƒ (value)
// raise: ƒ ()
// lower: ƒ ()
// append: ƒ (name)
// insert: ƒ (name, before)
// remove: ƒ ()
// clone: ƒ (deep)
// datum: ƒ (value)
// on: ƒ (typename, value, capture)
// dispatch: ƒ (type, params)
