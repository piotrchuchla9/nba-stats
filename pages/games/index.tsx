import Hero from "@/components/hero";
import useAllGames from "@/hooks/use-games";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TableGames from "./table-games";
import Pagination from "@/components/pagination";

export default function Games() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(25);
  const { data: games, isLoading, meta } = useAllGames(page, perPage);

  return (
    <>
      <Hero text={t("games")} desc={t("hero.gamesDesc")} />
      {meta && (
        <Pagination
          page={meta.current_page}
          setPage={setPage}
          maxPage={meta.total_pages}
          perPage={perPage}
          itemsPerPage={setPerPage}
        />
      )}
      {games && meta && <TableGames games={games} isLoading={isLoading} />}
      {meta && (
        <Pagination
          page={meta.current_page}
          setPage={setPage}
          perPage={perPage}
          itemsPerPage={setPerPage}
          maxPage={meta.total_pages}
        />
      )}
    </>
  );
}
