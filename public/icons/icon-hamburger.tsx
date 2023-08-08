import IconColorProp from "./color-interface";

export function IconHamburger({ color }: IconColorProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-menu-2"
      width="52"
      height="52"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={color || "currentColor"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 6l16 0"></path>
      <path d="M4 12l16 0"></path>
      <path d="M4 18l16 0"></path>
    </svg>
  );
}
