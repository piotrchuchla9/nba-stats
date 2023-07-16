import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavElementProps {
  icon: ReactNode;
  link: string;
  text: string;
}

export default function NavElement(props: NavElementProps) {
  const { icon, link, text } = props;
  const router = useRouter();
  const isActive = router.pathname === link;

  const containerClasses = twMerge("py-4");
  const itemClasses = twMerge(
    "flex gap-4",
    isActive && "text-blue-300",
    "group hover:text-blue-300"
  );
  const textClasses = twMerge("text-xl", isActive && "text-blue-300");

  return (
    <div className={containerClasses}>
      <Link href={link}>
        <div className={itemClasses}>
          <div className={twMerge("group-hover:text-blue-300")}>{icon}</div>
          <div className={twMerge("group-hover:text-blue-300", textClasses)}>
            <span>{text}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
