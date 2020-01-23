import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { select } from "d3-selection";
import {select} from 'd3-selection'

const App: React.FC = () => {
  const svgRef=useRef<SVGSVGElement>(null)
  useEffect(()=>{
    console.log(select(svgRef.current)
  })
  return (
    <div className="App">
    <svg ref={svgRef}/>
    </div>
  );
};

export default App;
