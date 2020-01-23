import React, { useRef, useEffect } from "react";

import "./App.css";

import { select, selectAll } from "d3-selection";

const App: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    console.log(select(svgRef.current));

    // select(svgRef.current)
    //   .append("rect") // selection switches from svg to newly appended element
    //   .attr("width", 50)
    //   .attr("height", 50)
    //   .attr("fill", "blue");

    selectAll("rect")
      .attr("width", 50)
      .attr("height", 50)
      .attr("fill", "yellow");
    // selectAll(".foo")
    // selectAll('#1')
  });

  return (
    <div className="App">
      <svg ref={svgRef}>
        <rect />
        <rect />
        <rect />
        <rect />

        <rect id="1" />
        <rect id="1" />
        <rect id="1" />
        <rect id="1" />

        <rect className="foo" />
        <rect className="foo" />
        <rect className="foo" />
        <rect className="foo" />
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
