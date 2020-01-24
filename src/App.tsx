import React, { useRef, useState, useEffect } from "react";
import { select, Selection } from "d3-selection";
import { scaleLinear, scaleBand } from "d3-scale";
import { max } from "d3-array";
import { axisLeft, axisBottom } from "d3-axis";

const data = [
  {
    name: "foo",
    units: 32
  },
  {
    name: "bar",
    units: 67
  },
  {
    name: "baz",
    units: 81
  },
  {
    name: "hoge",
    units: 38
  },
  {
    name: "piyo",
    units: 28
  },
  {
    name: "hogera",
    units: 59
  }
];

const dimensions = {
  width: 600,
  height: 600,
  marginLeft: 100,
  marginBottom: 100,
  marginTop: 100
};

const App: React.FC = () => {
  const svgRef = useRef<null | SVGSVGElement>(null);
  const [selection, setSelection] = useState<null | Selection<
    SVGSVGElement | null,
    unknown,
    null,
    undefined
  >>(null);

  const y = scaleLinear()
    .domain([0, max(data, d => d.units)!])
    .range([0, dimensions.width - dimensions.marginBottom]);

  const x = scaleBand()
    .domain(data.map(d => d.name))
    .range([0, dimensions.width - dimensions.marginLeft])
    .padding(0.1);

  const yAxis = axisLeft(y);
  const xAxis = axisBottom(x);

  useEffect(() => {
    if (!selection) {
      setSelection(select(svgRef.current));
    } else {
      const xAxisGroup = selection
        .append("g")
        .attr(
          "transform",
          `translate(${dimensions.marginLeft}, ${dimensions.height -
            dimensions.marginBottom})`
        )
        .call(xAxis);

      const yAxisGroup = selection
        .append("g")
        .attr("transform", `translate(${dimensions.marginLeft}, 0)`)
        .call(yAxis);
      const charts = selection
        .append("g")
        .attr("transform", `translate(${dimensions.marginLeft}, 0)`)
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", x.bandwidth)
        .attr("height", d => y(d.units))
        .attr("x", d => x(d.name)!)
        .attr("fill", "grey");
    }
  }, [selection]);
  return (
    <div>
      <svg
        ref={svgRef}
        height={dimensions.width}
        width={dimensions.height}
        style={{ marginTop: 20 }}
      ></svg>
    </div>
  );
};

export default App;
