import Hero from "@/components/hero";
import { useTranslation } from "react-i18next";

export default function Games() {
  const { t } = useTranslation();

  return <Hero text={t("games")} desc={t("hero.gamesDesc")} />;
}
