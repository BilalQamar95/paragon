import * as React from "react";

function SvgPropane(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16.75 6H16V3H8v3h-.75C3.97 6 1.1 8.53 1 11.82A6.001 6.001 0 007 18v3h2v-3h6v3h2v-3c3.38 0 6.1-2.79 6-6.18C22.9 8.53 20.03 6 16.75 6zM10 5h4v1h-4V5z" />
    </svg>
  );
}

export default SvgPropane;
