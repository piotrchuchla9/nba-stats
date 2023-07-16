import Hero from "@/components/hero";
import { useTranslation } from "react-i18next";

export default function Stats() {
  const { t } = useTranslation();

  return <Hero text={t("stats")} desc={t("hero.statsDesc")} />;
}
