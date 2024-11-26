import React, { useState } from "react";
import "../index.css";

const Color = () => {
  const [color, setColor] = useState("gray");

  return (
    <div
      className="page"
      style={{
        backgroundColor: color,
      }}
    >
     <div>
      <button className="button1" onClick={() => setColor("red")}> Red</button>
      <button className="button2" onClick={() => setColor("yellow")}> Yellow </button>
      <button className="button3" onClick={() => setColor("green")} > Green</button>
      <button className="button4" onClick={() => setColor("pink")} > Pink</button>
     </div>
    </div>
  );
};

export default Color;
