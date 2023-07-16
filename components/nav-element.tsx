import Link from "next/link";
import { ReactNode } from "react";

interface NavElementProps {
  icon: ReactNode;
  link: string;
  text: string;
}

export default function NavElement(props: NavElementProps) {
  const { icon, link, text } = props;
  return (
    <div className="py-3">
      <Link href={link}>
        <div className="flex gap-4 group/item">
          <div className="group-hover/item:text-blue-300">{icon}</div>
          <div className="group-hover/item:text-blue-300 text-xl">
            <span>{text}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
