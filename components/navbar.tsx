import {
  IconGame,
  IconMail,
  IconPlayers,
  IconPoland,
  IconSettings,
  IconStats,
  IconTeams,
  IconUSA,
} from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import logo from "../public/images/logo.png";
import NavElement from "./nav-element";

export default function Navbar() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguageToEn = () => {
    const { pathname, query, asPath } = router;
    const selectedLanguage = "en"

    i18n.changeLanguage(selectedLanguage);

    router.push(
      {
        pathname,
        query,
      },
      asPath,
      {
        locale: selectedLanguage,
      }
    );
  };

  const changeLanguageToPl = () => {
    const { pathname, query, asPath } = router;
    const selectedLanguage = "pl"

    i18n.changeLanguage(selectedLanguage);

    router.push(
      {
        pathname,
        query,
      },
      asPath,
      {
        locale: selectedLanguage,
      }
    );
  };

  return (
    <div className="p-12 pr-0 h-screen border-r-2 border-gray-600">
      <div className="flex">
        <Image width={32} src={logo} alt={"NBA Stats"} />
        <div className="flex items-center">
          <Link className="pl-3 font-semibold text-3xl" href={"/"}>
            NBA Stats
          </Link>
        </div>
      </div>
      <div className="h-full py-20 overflow-y-auto flex flex-col">
        <div className="flex-grow">
          <NavElement icon={<IconPlayers />} link={"/"} text={t("players")} />
          <NavElement icon={<IconTeams />} link={"/teams"} text={t("teams")} />
          <NavElement icon={<IconGame />} link={"/games"} text={t("games")} />
          <NavElement icon={<IconStats />} link={"/stats"} text={t("stats")} />
        </div>
        <div className="mt-auto flex flex-col gap-4">
          <button className="text-xl" onClick={() => console.log("modal")}>
            <div className="flex gap-4 group/item">
              <div className="group-hover/item:text-blue-300">
                <IconMail />
              </div>
              <div className="group-hover/item:text-blue-300">{t("contact")}</div>
            </div>
          </button>
          <details className="dropdown">
            <summary className="btn m-0 p-0 bg-inherit border-0 hover:bg-inherit">
              <div className="flex gap-4">
                <div>
                  <IconSettings />
                </div>
                <div>
                  <span className="text-xl capitalize font-normal">
                    {t("settings")}
                  </span>
                </div>
              </div>
            </summary>
            <div className="shadow menu dropdown-content z-[1] bg-inherit">
              <div className="flex gap-7">
                <button onClick={changeLanguageToPl}>
                  <IconPoland />
                </button>
                <button onClick={changeLanguageToEn}>
                  <IconUSA />
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
