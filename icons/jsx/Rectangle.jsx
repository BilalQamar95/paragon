import * as React from "react";

function SvgRectangle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M2 4h20v16H2z" />
    </svg>
  );
}

export default SvgRectangle;
