import IconColorProp from "./color-interface";

export function IconGame({ color, size }: IconColorProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-ball-basketball"
      width={size || "28"}
      height={size || "28"}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color || "currentColor"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M5.65 5.65l12.7 12.7"></path>
      <path d="M5.65 18.35l12.7 -12.7"></path>
      <path d="M12 3a9 9 0 0 0 9 9"></path>
      <path d="M3 12a9 9 0 0 1 9 9"></path>
    </svg>
  );
}
