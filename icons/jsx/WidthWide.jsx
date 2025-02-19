import * as React from "react";

function SvgWidthWide(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22 4H2v16h20V4zM4 6h2v12H4V6zm16 12h-2V6h2v12z" />
    </svg>
  );
}

export default SvgWidthWide;
