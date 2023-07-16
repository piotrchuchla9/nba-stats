import { RootState } from "@/utils/redux/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
interface NavElementProps {
  icon: ReactNode;
  link: string;
  text: string;
}

export default function NavElement(props: NavElementProps) {
  const { i18n } = useTranslation();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const { icon, link, text } = props;
  const router = useRouter();
  const isActive = router.pathname === link;

  const containerClasses = twMerge("py-4");
  const itemClasses = twMerge(
    "flex gap-4",
    isActive &&
      `${
        theme === "light"
          ? "text-blue-600 border-blue-600"
          : "text-blue-300 border-blue-300"
      } border-r-4`,
    `group ${theme === "light" ? "hover:text-blue-600" : "hover:text-blue-300"}`
  );
  const textClasses = twMerge(
    "text-xl",
    isActive &&
      (theme === "light" ? "text-blue-600 font-semibold" : "text-blue-300")
  );

  return (
    <div className={containerClasses}>
      <Link href={`${i18n.language}${link}`}>
        <div className={itemClasses}>
          <div
            className={twMerge(
              theme === "light"
                ? "group-hover:text-blue-600"
                : "group-hover:text-blue-300"
            )}
          >
            {icon}
          </div>
          <div
            className={twMerge(
              theme === "light"
                ? "group-hover:text-blue-600"
                : "group-hover:text-blue-300",
              textClasses
            )}
          >
            <span className="capitalize">{text}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
