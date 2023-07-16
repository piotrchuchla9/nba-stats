import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { initReactI18next } from "react-i18next";
import favico from "../public/icons/favicon.ico";
import enTrans from "../public/locales/en/common.json";
import plTrans from "../public/locales/pl/common.json";
import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const translations = {
  pl: {
    common: plTrans,
  },
  en: {
    common: enTrans,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    resources: translations,
  });

function App({ Component, pageProps }: AppProps) {
  const { locale, asPath, push } = useRouter();

  useEffect(() => {
    if (!asPath.includes(`/${locale}`)) {
      const redirectPath = `/${locale}${asPath === "/" ? "" : asPath}`;
      push(redirectPath);
    }
  }, []);

  return (
    <>
      <Head>
        <title>NBA Stats</title>
        <link rel="icon" type="image/x-icon" href={favico.src} />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <div className={montserrat.className}>
        <main className="w-full overflow-hidden">
          <div className="flex">
            <div className="w-96 z-10">
              <Navbar />
            </div>
            <div className="flex-1 h-screen p-12 overflow-y-auto relative">
              <PageTransition>{<Component {...pageProps} />}</PageTransition>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default appWithTranslation(App);
