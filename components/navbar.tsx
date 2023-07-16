import {
  IconGame,
  IconMail,
  IconPlayers,
  IconPoland,
  IconSettings,
  IconStats,
  IconTeams,
  IconTheme,
  IconUSA,
} from "@/public/icons";
import { setTheme } from "@/utils/redux/slices/themeSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import logo from "../public/images/logo.png";
import NavElement from "./nav-element";

export default function Navbar() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();

  const changeLanguageToEn = () => {
    const { pathname, query, asPath } = router;
    const selectedLanguage = "en";

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
    const selectedLanguage = "pl";

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
          <NavElement
            icon={<IconPlayers />}
            link={"/players"}
            text={t("players")}
          />
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
              <div className="group-hover/item:text-blue-300">
                {t("contact")}
              </div>
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
                <button
                  // @ts-ignore
                  onClick={() => window.theme_modal.showModal()}
                  className="p-2 rounded-lg border-2 border-slate-400 hover:bg-slate-600 hover:text-white"
                >
                  <div className="flex gap-2">
                    <div>
                      <IconTheme />
                    </div>
                    <div>
                      <span>{t("theme")}</span>
                    </div>
                  </div>
                </button>
                <dialog id="theme_modal" className="modal">
                  <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <h3 className="font-bold text-lg text-center">
                      {t("themeModalTitle")}
                    </h3>
                    <div
                      className="flex pt-10 pb-5 items-center justify-center gap-10"
                    >
                      <button
                        onClick={() => dispatch(setTheme("light"))}
                        className="bg-slate-300 text-black px-2 py-1 border-2 rounded-lg border-slate-600"
                      >
                        {t("themes.light")}
                      </button>
                      <button
                        onClick={() => dispatch(setTheme("dark"))}
                        className="bg-slate-600 text-slate-300 px-2 py-1 border-2 rounded-lg border-slate-300"
                      >
                        {t("themes.dark")}
                      </button>
                      <button
                        onClick={() => dispatch(setTheme("synthwave"))}
                        className="bg-purple-600 text-slate-300 px-2 py-1 border-2 rounded-lg border-slate-300"
                      >
                        {t("themes.purple")}
                      </button>
                    </div>
                  </form>
                </dialog>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
