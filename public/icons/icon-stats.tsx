import IconColorProp from "./color-interface";

export function IconStats({ color }: IconColorProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chart-line"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color || "currentColor"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 19l16 0"></path>
      <path d="M4 15l4 -6l4 2l4 -5l4 4"></path>
    </svg>
  );
}
