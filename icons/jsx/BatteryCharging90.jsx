import * as React from "react";

function SvgBatteryCharging90(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path fillOpacity={0.3} d="M17 4h-3V2h-4v2H7v4h5.47L13 7v1h4V4z" />
      <path d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v14h10V8h-4v4.5z" />
    </svg>
  );
}

export default SvgBatteryCharging90;
