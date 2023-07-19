import Hero from "@/components/hero";
import useAllPlayers from "@/hooks/use-players";
import { useTranslation } from "react-i18next";
import TablePlayers from "./table-players";
import { useState } from "react";
import Pagination from "@/components/pagination";

export default function Index() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const { data: allPlayers, isLoading } = useAllPlayers(page);

  return (
    <>
      <Hero text={t("players")} desc={t("hero.playersDesc")} />
      <Pagination page={page} maxPage={206} setPage={setPage} />
      {allPlayers && (
        <TablePlayers players={allPlayers} isLoading={isLoading} />
      )}
      <Pagination page={page} maxPage={206} setPage={setPage} />
    </>
  );
}
