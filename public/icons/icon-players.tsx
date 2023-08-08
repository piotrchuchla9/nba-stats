import IconColorProp from "./color-interface";

export function IconPlayers({ color, size }: IconColorProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-play-basketball"
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
      <path d="M10 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
      <path d="M5 21l3 -3l.75 -1.5"></path>
      <path d="M14 21v-4l-4 -3l.5 -6"></path>
      <path d="M5 12l1 -3l4.5 -1l3.5 3l4 1"></path>
      <path
        d="M18.5 16a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
