import Hero from "@/components/hero";
import useAllTeams from "@/hooks/use-teams";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import RadioTeamsOptions from "./radio-options";
import TableTeams from "./table-teams";

export default function Teams() {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState<string>("teams");
  const {
    data: teams,
    isLoading,
    teamsSortedByDivision,
    teamsSortedByConference,
  } = useAllTeams();

  let displayedTeams = teams || [];

  if (selectedOption === "teams") {
    displayedTeams = teams || [];
  } else if (selectedOption === "division") {
    displayedTeams = teamsSortedByDivision || [];
  } else if (selectedOption === "conference") {
    displayedTeams = teamsSortedByConference || [];
  }

  return (
    <>
      <Hero text={t("teams")} desc={t("hero.teamsDesc")} />
      <div className="mb-10">
        <RadioTeamsOptions
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      {teams && <TableTeams teams={displayedTeams} isLoading={isLoading} />}
    </>
  );
}
