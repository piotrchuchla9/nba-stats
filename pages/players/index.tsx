import Hero from "@/components/hero";
import useAllPlayers from "@/hooks/use-players";
import { useTranslation } from "react-i18next";
import TablePlayers from "./table-players";
import { useState } from "react";
import Pagination from "@/components/pagination";
import RadioPlayersOptions from "./radio-options";

export default function Index() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(25);
  const [selectedOption, setSelectedOption] = useState<string>("lastName");
  const {
    data: players,
    playersSortedByFirstName,
    playersSortedByLastName,
    playersSortedByPosition,
    playersSortedByTeam,
    isLoading,
    meta,
  } = useAllPlayers(page, perPage);

  let displayedTeams = players || [];

  if (selectedOption === "lastName") {
    displayedTeams = playersSortedByLastName || [];
  } else if (selectedOption === "firstName") {
    displayedTeams = playersSortedByFirstName || [];
  } else if (selectedOption === "position") {
    displayedTeams = playersSortedByPosition || [];
  } else if (selectedOption === "team") {
    displayedTeams = playersSortedByTeam || [];
  }

  return (
    <>
      <Hero text={t("players")} desc={t("hero.playersDesc")} />
      <div className="flex justify-end">
        <RadioPlayersOptions
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        {meta && (
          <Pagination
            page={meta.current_page}
            setPage={setPage}
            maxPage={meta.total_pages}
            perPage={perPage}
            itemsPerPage={setPerPage}
          />
        )}
      </div>
      {players && (
        <TablePlayers players={displayedTeams} isLoading={isLoading} />
      )}
      <div className="flex justify-end">
        {meta && (
          <Pagination
            page={meta.current_page}
            setPage={setPage}
            maxPage={meta.total_pages}
            perPage={perPage}
            itemsPerPage={setPerPage}
          />
        )}
      </div>
    </>
  );
}
