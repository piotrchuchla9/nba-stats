import Hero from "@/components/hero";
import { useTranslation } from "react-i18next";
import StatSlider from "./slider";

export default function Index() {
  const { t } = useTranslation();

  return (
    <>
      <Hero text={t("welcome")} desc={t("welcomeDesc")} />
      <p className="text-3xl mb-10 text-blue-400 text-center font-semibold">{t("dashboardWelcome")}</p>
      <StatSlider />
    </>
  );
}
