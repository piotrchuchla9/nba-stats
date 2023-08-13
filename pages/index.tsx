import Hero from "@/components/hero";
import { useTranslation } from "react-i18next";
import StatSlider from "./slider";

export default function Index() {
  const { t } = useTranslation();

  return (
    <>
      <Hero text={t("welcome")} desc={t("welcomeDesc")} />
      <p className="text-3xl mb-10 text-blue-400 text-center font-semibold mr-20 md:mr-0 mt-20 md:mt-0">
        {t("dashboardWelcome")}
      </p>
      <div className="pr-0 md:pr-4 mr-20 md:mr-0">
        <StatSlider />
      </div>
    </>
  );
}
