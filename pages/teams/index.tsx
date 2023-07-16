import Hero from "@/components/hero";
import { useTranslation } from "react-i18next";

export default function Teams() {
  const { t } = useTranslation();

  return <Hero text={t("teams")} desc={t("hero.teamsDesc")} />;
}
