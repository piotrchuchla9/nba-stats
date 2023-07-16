import Hero from "@/components/hero";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();

  return <Hero text={t("players")} desc={t("hero.playersDesc")} />;
}
