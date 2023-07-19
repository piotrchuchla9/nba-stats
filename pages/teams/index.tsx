import Hero from "@/components/hero";
import useAllTeams from "@/hooks/use-teams";
import { useTranslation } from "react-i18next";
import TableTeams from "./table-teams";

export default function Teams() {
  const { t } = useTranslation();
  const { data: teams, isLoading } = useAllTeams();

  return (
    <>
      <Hero text={t("teams")} desc={t("hero.teamsDesc")} />
      <div className="py-10">{teams && <TableTeams teams={teams} isLoading={isLoading} />}</div>
    </>
  );
}
