import Hero from "@/components/hero";
import useAllGames from "@/hooks/use-games";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TableGames from "./table-games";
import Pagination from "@/components/pagination";

export default function Games() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const { data: games, isLoading } = useAllGames(page);
  console.log(games);
  return (
    <>
      <Hero text={t("games")} desc={t("hero.gamesDesc")} />
      <Pagination page={page} setPage={setPage} maxPage={1877} />
      {games && <TableGames games={games} />}
      <Pagination page={page} setPage={setPage} maxPage={1877} />
    </>
  );
}
