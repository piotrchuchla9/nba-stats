import {
  IconClose,
  IconGame,
  IconHamburger,
  IconMail,
  IconPlayers,
  IconPoland,
  IconTeams,
  IconTheme,
  IconUSA,
} from "@/public/icons";
import { t } from "i18next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/images/logo.png";
import { ContactForm } from "./contact-form";
import NavElement from "./nav-element";
import { RootState } from "@/utils/redux/store";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/utils/redux/slices/themeSlice";
import { twMerge } from "tailwind-merge";

export function Hamburger() {
  const [open, setOpen] = useState<boolean>(true);
  const [openForm, setOpenForm] = useState<boolean>(true);
  const { i18n } = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

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
    <>
      <button
        className={"absolute top-10 right-10 z-50"}
        onClick={() => setOpen(!open)}
      >
        <div>{open ? <IconClose /> : <IconHamburger />}</div>
      </button>
      {open && (
        <div
          className={twMerge(
            `absolute top-0 right-0 z-30 w-full h-full`,
            theme === "dark" && "bg-gray-800",
            theme === "light" && "bg-white",
            theme === "synthwave" && "bg-[#1A103C]"
          )}
        >
          <div className="flex justify-center">
            <div className="pt-20 w-1/2">
              <div className="grid grid-cols-1 place-items-center">
                <div className="flex">
                  <button
                    onClick={() => setOpen(false)}
                    className="flex items-center"
                  >
                    <Image width={42} src={logo} alt={"NBA Stats"} />
                    <Link className="pl-3 font-semibold text-5xl" href={"/"}>
                      NBA Stats
                    </Link>
                  </button>
                </div>
                <button className="pt-10" onClick={() => setOpen(false)}>
                  <NavElement
                    icon={<IconPlayers size={42} />}
                    link={"/players"}
                    text={t("players")}
                    className="border-0"
                    size="text-4xl"
                  />
                  <NavElement
                    icon={<IconTeams size={42} />}
                    link={"/teams"}
                    text={t("teams")}
                    className="border-0"
                    size="text-4xl"
                  />
                  <NavElement
                    icon={<IconGame size={42} />}
                    link={"/games"}
                    text={t("games")}
                    className="border-0"
                    size="text-4xl"
                  />
                </button>
              </div>
              <div className="mt-10 grid grid-cols-1 place-items-center">
                <button
                  className="text-xl"
                  // @ts-ignore
                  onClick={() => setOpenForm(!openForm)}
                >
                  <div className="flex gap-4 group/item">
                    <div className="group-hover/item:text-blue-300">
                      <IconMail size={42} />
                    </div>
                    <div className="group-hover/item:text-blue-300 text-4xl">
                      {t("contact")}
                    </div>
                  </div>
                </button>
                {openForm && <ContactForm />}
                <div className="mt-10 w-full grid grid-cols-1 place-items-center">
                  <div className="flex gap-4">
                    <button onClick={changeLanguageToPl}>
                      <IconPoland />
                    </button>
                    <button onClick={changeLanguageToEn}>
                      <IconUSA />
                    </button>
                  </div>
                  <div className="flex gap-2 mt-5">
                    <div className="flex items-center">
                      <div>
                        <IconTheme />
                      </div>
                      <div className="pr-2">
                        <span>{t("theme")}</span>
                      </div>
                    </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
