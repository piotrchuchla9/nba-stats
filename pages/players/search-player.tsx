import usePlayer from "@/hooks/use-player";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TablePlayers from "./table-players";
import RadioPlayersOptions from "./radio-options";
import Pagination from "@/components/pagination";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/redux/store";

export default function SearchPlayer() {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(25);
  const [searchValue, setSearchValue] = useState<string>("");
  const [player, setPlayer] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("id");
  const error = useSelector((state: RootState) => state.error.error);

  const {
    data: players,
    playersSortedByFirstName,
    playersSortedByLastName,
    playersSortedByPosition,
    playersSortedByTeam,
    playersSortedByID,
    isLoading,
    meta,
  } = usePlayer(player, page, perPage);

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

  const handleButtonClick = () => {
    setPlayer(searchValue);
    // @ts-ignore
    searchValue === player && window.player_modal.showModal();
  };

  useEffect(() => {
    if (!isLoading && player) {
      // @ts-ignore
      window.player_modal.showModal();
    }
  }, [isLoading, player]);

  return (
    <div>
      <span className="mr-4">{t("searchPlayer")}</span>
      <div className="relative inline-block">
        <input
          type="text"
          defaultValue=""
          value={searchValue}
          placeholder={`${t("player")}...`}
          className="input input-bordered w-48 border-slate-500 max-w-xs placeholder:text-slate-700 mr-2 pr-10"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          onClick={searchValue !== "" ? handleButtonClick : undefined}
          className="absolute top-3 right-4 hover:text-blue-300"
        >
          <IconSearch />
        </button>
        <dialog id="player_modal" className="modal">
          <form
            method="dialog"
            className="modal-box max-w-none px-40 max-h-3/5"
          >
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <p className="text-center my-10">
              <span className="text-3xl">{`${t("playerLike")}: `}</span>
              <span className="text-4xl font-semibold text-blue-500">
                {player}
              </span>
            </p>
            {players ? (
              <>
                {!error && (
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
                )}
                <TablePlayers
                  players={displayedPlayers}
                  isLoading={isLoading}
                />
                {!error && (
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
                )}
              </>
            ) : (
              <p className="text-center">{t("playerNotFound")}</p>
            )}
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
