import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import favico from "../public/icons/favicon.ico";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import PageTransition from "@/components/page-transition";

const montserrat = Montserrat({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
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
            <div className="w-96">
              <Navbar />
            </div>
            <div className="flex-1 h-screen p-12 overflow-y-auto">
              <PageTransition>{<Component {...pageProps} />}</PageTransition>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
