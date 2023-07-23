import Hero from "@/components/hero";
import useAllPlayers from "@/hooks/use-players";
import { useTranslation } from "react-i18next";
import TablePlayers from "./table-players";
import { useState } from "react";
import Pagination from "@/components/pagination";
import RadioPlayersOptions from "./radio-options";
import SearchPlayer from "./search-player";

export default function Index() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(25);
  const [selectedOption, setSelectedOption] = useState<string>("id");
  const {
    data: players,
    playersSortedByFirstName,
    playersSortedByLastName,
    playersSortedByPosition,
    playersSortedByTeam,
    playersSortedByID,
    isLoading,
    meta,
  } = useAllPlayers(page, perPage);

  let displayedPlayers = players || [];

  if (selectedOption === "id") {
    displayedPlayers = playersSortedByID || [];
  } else if (selectedOption === "lastName") {
    displayedPlayers = playersSortedByLastName || [];
  } else if (selectedOption === "firstName") {
    displayedPlayers = playersSortedByFirstName || [];
  } else if (selectedOption === "position") {
    displayedPlayers = playersSortedByPosition || [];
  } else if (selectedOption === "team") {
    displayedPlayers = playersSortedByTeam || [];
  }

  return (
    <>
      <Hero text={t("players")} desc={t("hero.playersDesc")} />
      <SearchPlayer />
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
        <TablePlayers players={displayedPlayers} isLoading={isLoading} />
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
