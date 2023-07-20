import { Table } from "@/components/table";
import { Game } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Game>();

const Columns = () => {
  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      cell: (info) => info.getValue(),
      header: "ID",
    }),
    columnHelper.accessor((row) => row.home_team.abbreviation, {
      id: "home_team",
      cell: (info) =>
        info.row.original.home_team_score >
        info.row.original.visitor_team_score ? (
          <div className="text-green-700">
            <div>
              <p>{info.getValue()}</p>
            </div>
          </div>
        ) : (
          <span className="text-red-400">{info.getValue()}</span>
        ),
      header: "home_team",
    }),
    columnHelper.accessor((row) => row.visitor_team.abbreviation, {
      id: "visitor_team",
      cell: (info) =>
        info.row.original.home_team_score <
        info.row.original.visitor_team_score ? (
          <div className="text-green-700">
            <div>
              <p>{info.getValue()}</p>
            </div>
          </div>
        ) : (
          <span className="text-red-400">{info.getValue()}</span>
        ),
      header: "visitor_team",
    }),
    columnHelper.accessor((row) => row.home_team_score, {
      id: "home_team_score",
      cell: (info) => info.getValue(),
      header: "home_team_score",
    }),
    columnHelper.accessor((row) => row.visitor_team_score, {
      id: "visitor_team_score",
      cell: (info) => info.getValue(),
      header: "visitor_team_score",
    }),
    columnHelper.accessor((row) => row.date, {
      id: "date",
      cell: (info) => info.getValue().toString().substring(0, 10),
      header: "date",
    }),
    columnHelper.accessor((row) => row.status, {
      id: "status",
      cell: (info) => info.getValue(),
      header: "status",
    }),
    columnHelper.accessor((row) => row.period, {
      id: "peroid",
      cell: (info) => info.getValue(),
      header: "peroid",
    }),
    columnHelper.accessor((row) => row.season, {
      id: "season",
      cell: (info) => info.getValue(),
      header: "season",
    }),
  ];

  return columns;
};

interface TableGamesProps {
  games: Game[];
  isLoading?: boolean;
}

const TableGames: React.FC<TableGamesProps> = ({ games, isLoading }) => {
  if (isLoading || !games) {
    return <div>Loading...</div>;
  }

  if (games.length === 0) {
    return <div>No games available.</div>;
  }

  const columns = Columns();
  return <Table data={games} columns={columns} isLoading={isLoading} />;
};

export default TableGames;
