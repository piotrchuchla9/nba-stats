import { Table } from "@/components/table";
import { IconError } from "@/public/icons";
import { Player } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";

const columnHelper = createColumnHelper<Player>();

const Columns = () => {
  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      cell: (info) => info.getValue(),
      header: "ID",
    }),
    columnHelper.accessor((row) => row.first_name, {
      id: "first_name",
      cell: (info) => info.getValue(),
      header: "first_name",
    }),
    columnHelper.accessor((row) => row.last_name, {
      id: "last_name",
      cell: (info) => info.getValue(),
      header: "last_name",
    }),
    columnHelper.accessor((row) => row.position, {
      id: "position",
      cell: (info) =>
        info.getValue() !== "" ? (
          <div className="flex justify-center">{info.getValue()}</div>
        ) : (
          <div className="flex justify-center">-</div>
        ),
      header: "position",
    }),
    columnHelper.accessor((row) => row.team, {
      id: "team",
      cell: (info) => info.getValue().full_name,
      header: "team",
    }),
    columnHelper.accessor((row) => row.height_feet, {
      id: "height_feet",
      cell: (info) =>
        info.getValue() !== null ? (
          <div className="flex justify-center">{`${info.getValue()} - ${
            info.row.original.height_inches
          }`}</div>
        ) : (
          <div className="flex justify-center">-</div>
        ),
      header: "height_feet",
    }),
    columnHelper.accessor((row) => row.height_feet, {
      id: "height_inches",
      cell: (info) =>
        info.getValue() !== null ? (
          <div className="flex justify-center">
            {(Number(info.getValue()) * 30.48).toFixed()}
          </div>
        ) : (
          <div className="flex justify-center">-</div>
        ),
      header: "height_inches",
    }),
    columnHelper.accessor((row) => row.weight_pounds, {
      id: "weight_pounds",
      cell: (info) =>
        info.getValue() !== null ? (
          <div className="flex justify-center">{info.getValue()}</div>
        ) : (
          <div className="flex justify-center">-</div>
        ),
      header: "weight_pounds",
    }),
    columnHelper.accessor((row) => row.weight_pounds, {
      id: "weight_pounds",
      cell: (info) =>
        info.getValue() !== null ? (
          <div className="flex justify-center">
            {(Number(info.getValue()) * 0.453).toFixed()}
          </div>
        ) : (
          <div className="flex justify-center">-</div>
        ),
      header: "weight_kilograms",
    }),
  ];

  return columns;
};

interface TablePlayersProps {
  players: Player[];
  isLoading?: boolean;
}

const TablePlayers: React.FC<TablePlayersProps> = ({ players, isLoading }) => {
  const { t } = useTranslation();

  if (isLoading || !players) {
    return <div>{t("loading")}</div>;
  }

  if (players.length === 0) {
    return (
      <div>
        <div>
          <p className="text-center">{t("noPlayers")}</p>
        </div>
        <div className="flex justify-center text-red-400">
          <IconError />
        </div>
      </div>
    );
  }

  const columns = Columns();
  return <Table data={players} columns={columns} isLoading={isLoading} />;
};

export default TablePlayers;
