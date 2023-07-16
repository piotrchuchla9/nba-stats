import i18n from "i18next";
import Backend from "i18next-http-backend";
import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { initReactI18next } from "react-i18next";
import { Provider } from "react-redux";
import favico from "../public/icons/favicon.ico";
import enTrans from "../public/locales/en/common.json";
import plTrans from "../public/locales/pl/common.json";
import "../styles/globals.css";
import { store } from "../utils/redux/store";
import Layout from "./layout";

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
      <Provider store={store}>
        <div className={montserrat.className}>
          <main className="w-full overflow-hidden">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </div>
      </Provider>
    </>
  );
}

export default appWithTranslation(App);
