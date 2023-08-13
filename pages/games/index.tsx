import Hero from "@/components/hero";
import useAllGames from "@/hooks/use-games";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TableGames from "./table-games";
import Pagination from "@/components/pagination";
import RadioGamesOptions from "./radio-options";

export default function Games() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(25);
  const [selectedOption, setSelectedOption] = useState<string>("games");

  const {
    data: games,
    isLoading,
    meta,
    gamesSortedByHighestScore,
    gamesSortedByLowestScore,
    gamesSortedByHighestDifference,
    gamesSortedByDate,
  } = useAllGames(page, perPage);

  let displayedGames = games || [];

  if (selectedOption === "games") {
    displayedGames = games || [];
  } else if (selectedOption === "highestScore") {
    displayedGames = gamesSortedByHighestScore || [];
  } else if (selectedOption === "lowestScore") {
    displayedGames = gamesSortedByLowestScore || [];
  } else if (selectedOption === "biggestDifference") {
    displayedGames = gamesSortedByHighestDifference || [];
  } else if (selectedOption === "date") {
    displayedGames = gamesSortedByDate || [];
  }

  return (
    <>
      <Hero text={t("games")} desc={t("hero.gamesDesc")} />
      <div className="flex flex-col 2xl:flex-row justify-end mr-10 md:mr-0">
        <RadioGamesOptions
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
      {meta && <TableGames games={displayedGames} isLoading={isLoading} />}
      <div className="flex justify-end mt-2.5 md:mt-0 mr-10 md:mr-0">
        {meta && (
          <Pagination
            page={meta.current_page}
            setPage={setPage}
            perPage={perPage}
            itemsPerPage={setPerPage}
            maxPage={meta.total_pages}
          />
        )}
      </div>
    </>
  );
}
