import * as React from "react";

function SvgForward(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 8V4l8 8-8 8v-4H4V8h8z" />
    </svg>
  );
}

export default SvgForward;
