import { Table } from "@/components/table";
import { Team } from "@/utils/types";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Team>();

const Columns = () => {
  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      cell: (info) => info.getValue(),
      header: "ID",
    }),
    columnHelper.accessor((row) => row.full_name, {
      id: "full_name",
      cell: (info) => info.getValue(),
      header: "full_team_name",
    }),
    columnHelper.accessor((row) => row.name, {
      id: "name",
      cell: (info) => info.getValue(),
      header: "name",
    }),
    columnHelper.accessor((row) => row.city, {
      id: "city",
      cell: (info) => info.getValue(),
      header: "city",
    }),
    columnHelper.accessor((row) => row.conference, {
      id: "conference",
      cell: (info) => info.getValue(),
      header: "conference",
    }),
    columnHelper.accessor((row) => row.division, {
      id: "division",
      cell: (info) => info.getValue(),
      header: "division",
    }),
    columnHelper.accessor((row) => row.abbreviation, {
      id: "abbreviation",
      cell: (info) => info.getValue(),
      header: "abbreviation",
    }),
  ];

  return columns;
};

interface TableTeamsProps {
  teams: Team[];
  isLoading?: boolean;
}

const TableTeams: React.FC<TableTeamsProps> = ({ teams, isLoading }) => {
  if (isLoading || !teams) {
    return <div>Loading...</div>;
  }

  if (teams.length === 0) {
    return <div>No games available.</div>;
  }

  const columns = Columns();
  return <Table data={teams} columns={columns} isLoading={isLoading} />;
};

export default TableTeams;
