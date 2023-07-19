import { IconSort } from "@/public/icons";
import { RootState } from "@/utils/redux/store";
import {
  Cell,
  flexRender,
  getCoreRowModel,
  Header,
  HeaderGroup,
  OnChangeFn,
  Row,
  SortingState,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import TableLoader from "./table-loader";

type TableProps<TData> = Pick<TableOptions<TData>, "columns" | "data">;

function TableHeaderCell<TData>(header: Header<TData, unknown>) {
  const { t } = useTranslation();
  if (typeof header.column.columnDef.header === "string") {
    header.column.columnDef.header =
      t(header.column.columnDef.header) || undefined;
  }

  return (
    <th key={header.id}>
      {header.isPlaceholder ? null : header.column.getCanSort() ? (
        <button
          className="flex"
          onClick={header.column.getToggleSortingHandler()}
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
          <IconSort className="mt-2 ml-1" />
        </button>
      ) : (
        <span>
          {flexRender(header.column.columnDef.header, header.getContext())}
        </span>
      )}
    </th>
  );
}

function TableHeaderRow<TData>(headerGroup: HeaderGroup<TData>) {
  return (
    <tr className="ml-2">
      {headerGroup.headers.map((header) => (
        <TableHeaderCell key={header.id} {...header} />
      ))}
    </tr>
  );
}

function TableDataCell<TData>(cell: Cell<TData, unknown>) {
  return (
    <td
      key={cell.id}
      className="h-[41px] px-3 border-l-[1px] border-r-[1px] border-slate-700"
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}

function TableBodyRow<TData>(row: Row<TData>) {
  const isEven = row.index % 2 === 0;
  const theme = useSelector((state: RootState) => state.theme.theme);
  const rowClassName = isEven
    ? null
    : theme === "light"
    ? "bg-slate-300 odd-row"
    : "bg-slate-800 odd-row";

  return (
    <tr
      className={twMerge(
        rowClassName,
        `bg-opacity-70 hover:bg-opacity-100  ${
          theme === "light"
            ? "hover:text-white hover:bg-slate-400"
            : theme === "synthwave"
            ? "hover:text-purple-300"
            : "hover:text-white"
        }`
      )}
    >
      {row.getVisibleCells().map((cell) => (
        <TableDataCell key={cell.id} {...cell} />
      ))}
    </tr>
  );
}

export function Table<TData>({
  sorting,
  setSorting,
  isLoading,
  ...tableProps
}: TableProps<TData> & {
  sorting?: SortingState;
  setSorting?: OnChangeFn<SortingState>;
  isLoading?: boolean;
}) {
  const table = useReactTable({
    manualSorting: true,
    manualFiltering: true,
    ...tableProps,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <>
      {isLoading ? (
        <TableLoader />
      ) : (
        <table className="w-[100%] border-b-2">
          <thead className="border-b-2 border-gray-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableHeaderRow key={headerGroup.id} {...headerGroup} />
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <TableBodyRow key={row.id} {...row} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
