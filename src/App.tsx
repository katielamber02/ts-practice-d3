import React, { useRef, useState, useEffect } from "react";
import { select, Selection } from "d3-selection";
import { scaleLinear, scaleBand } from "d3-scale";
import { max } from "d3-array";

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
    units: 1250,
    color: "orange"
  },
  {
    name: "hoge",
    units: 900,
    color: "purple"
  },
  {
    name: "hogg",
    units: 600,
    color: "aqua"
  }
];

const dimensions = {
  width: 800,
  height: 500,
  chartWidth: 500,
  chartHeight: 400,
  marginLeft: 100
};

const App: React.FC = () => {
  const svgRef = useRef<null | SVGSVGElement>(null);
  const [selection, setSelection] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  const maxValue = max(data, data => data.units);

  const y = scaleLinear()
    .domain([0, maxValue!])
    .range([0, dimensions.chartHeight]);

  const x = scaleBand()
    .domain(data.map(d => d.name))
    .range([0, dimensions.chartWidth])
    .padding(0.09);

  useEffect(() => {
    if (!selection) {
      setSelection(select(svgRef.current));
    } else {
      selection
        .append("rect")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height)
        .attr("fill", "grey");

      selection
        .append("g")
        .attr("transform", `translate(${dimensions.marginLeft},0)`)
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", x.bandwidth)
        .attr("height", d => y(d.units))
        .attr("fill", d => d.color)
        .attr("x", d => x(d.name)!);
    }
  }, [selection]);
  return (
    <div>
      <svg
        ref={svgRef}
        height={dimensions.chartHeight}
        width={dimensions.chartWidth}
      ></svg>
    </div>
  );
};

export default App;
