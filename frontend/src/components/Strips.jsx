import React from "react";

function Strips({ text, bgColor, textColor, angle }) {
  return (
    <div
    className={`w-full py-2 ${bgColor} ${textColor} transform origin-center absolute overflow-x-hidden`}
    style={{
      left: '-50%',
      top: '50%',
      transform: `translateY(-50%) rotate(${angle}deg)`,
      width: '200%', // Make the width 200% to ensure it extends beyond the window
    }}
  >
    <p className="text-center">{text}</p>
    <h1>ss</h1>
  </div>
  );
}

export default Strips;
