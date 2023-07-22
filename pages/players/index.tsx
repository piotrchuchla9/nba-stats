import Hero from "@/components/hero";
import useAllPlayers from "@/hooks/use-players";
import { useTranslation } from "react-i18next";
import TablePlayers from "./table-players";
import { useState } from "react";
import Pagination from "@/components/pagination";

export default function Index() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(25);
  const { data: allPlayers, isLoading, meta } = useAllPlayers(page, perPage);

  return (
    <>
      <Hero text={t("players")} desc={t("hero.playersDesc")} />
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
      {allPlayers && (
        <TablePlayers players={allPlayers} isLoading={isLoading} />
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
