import Hero from "@/components/hero";
import useAllPlayers from "@/hooks/use-all-players";
import { useTranslation } from "react-i18next";
import TablePlayers from "./table-players";

export default function Index() {
  const { t } = useTranslation();
  const { data: allPlayers, isLoading, isError } = useAllPlayers();

  allPlayers && console.log(allPlayers);

  return (
    <>
      <Hero text={t("players")} desc={t("hero.playersDesc")} />
      {allPlayers && (
        <TablePlayers players={allPlayers} isLoading={isLoading} />
      )}
    </>
  );
}
