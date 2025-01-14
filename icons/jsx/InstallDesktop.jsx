import * as React from "react";

function SvgInstallDesktop(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z" />
      <path d="M17 14l5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z" />
    </svg>
  );
}

export default SvgInstallDesktop;
