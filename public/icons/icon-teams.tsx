import IconColorProp from "./color-interface";

export function IconTeams({ color }: IconColorProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-users"
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
      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
    </svg>
  );
}
