import * as React from "react";

function SvgFilterBAndW(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M21 3H3v18h18V3zm-2 16l-7-8v8H5l7-8V5h7v14z" />
    </svg>
  );
}

export default SvgFilterBAndW;
