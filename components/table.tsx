import { IconSort } from "@/public/icons";
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

function CustomTableRow() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableBodyRow<TData>(row: Row<TData>) {
  const isEven = row.index % 2 === 0;
  const rowClassName = isEven ? null : "bg-slate-800 odd-row";

  return (
    <tr
      className={twMerge(
        rowClassName,
        "bg-opacity-70 hover:bg-opacity-100 hover:text-white"
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
        <table>
          <thead className="border-b-2 border-gray-400 w-full">
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
