"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { DataTableToolbar } from "./data-table-toolbar";
import { DataTablePagination } from "./data-table-pagination";
import { useParams, useRouter } from "next/navigation";
import { Input } from "./input";
import { Button } from "./button";
import { CheckCheck, Download, Trash } from "lucide-react";
import exportDataToExcel from "../exportDataToExcel";
import { EmailButton } from "@/app/admin/components/EmailButton";
// import { Loader } from "lucide-react";
// import Loading from "@/app/loading";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey: string;
  type: string;
  clickable: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  clickable,
  type,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [loading, setLoading] = React.useState(false);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const router = useRouter();
  const params = useParams();

  const userAuthorities = localStorage.getItem("authorities");

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      <div className="py-4">
        <Input
          placeholder="Search ..."
          value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(searchKey)?.setFilterValue(event.target.value)
          }
          className="max-w-sm ml-2 mb-2 sm:ml-0"
        />
        <div className="sm:flex items-center justify-between">
          <div className="sm:ml-2 mb-2">
            <DataTableToolbar table={table} />
          </div>
          {table.getFilteredSelectedRowModel().rows.length > 0 && (
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="flex items-center justify-center">
                <div
                  className={`${
                    !(
                      userAuthorities?.includes("DELETE_ACCOUNT") ||
                      !userAuthorities?.includes("DELETE_VISITORS")
                    ) && "cursor-not-allowed"
                  }`}
                  title={`${
                    !(
                      userAuthorities?.includes("DELETE_ACCOUNT") ||
                      !userAuthorities?.includes("DELETE_VISITORS")
                    ) && "Not Authorized"
                  }`}
                >
                  <Button
                    className="border"
                    size="sm"
                    variant="destructive"
                    disabled={
                      loading ||
                      !(
                        userAuthorities?.includes("DELETE_ACCOUNT") ||
                        !userAuthorities?.includes("DELETE_VISITORS")
                      )
                    }
                  >
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
                <Button
                  className="ml-2 border"
                  size="sm"
                  onClick={() => {
                    type === "loan"
                      ? exportDataToExcel(
                          "filtered",
                          table.getFilteredSelectedRowModel().rows
                        )
                      : type === "account"
                      ? exportDataToExcel(
                          "filtered",
                          table.getFilteredSelectedRowModel().rows
                        )
                      : type === "offline" &&
                        exportDataToExcel(
                          "filtered",
                          table.getFilteredSelectedRowModel().rows
                        );
                  }}
                  variant="secondary"
                  disabled={loading}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                {clickable &&
                  !table.getFilteredSelectedRowModel().rows.map((item) =>
                    // @ts-ignore
                    item.original.status.includes("APPROVED")
                  )[0] &&
                  !table.getFilteredSelectedRowModel().rows.map((item) =>
                    // @ts-ignore
                    item.original.status.includes("REJECTED")
                  )[0] && (
                    <div
                      className={`${
                        !(
                          userAuthorities?.includes("EDIT_ACCOUNT") ||
                          !userAuthorities?.includes("READ_ACCOUNT")
                        ) && "cursor-not-allowed"
                      }`}
                      title={`${
                        !(
                          userAuthorities?.includes("EDIT_ACCOUNT") ||
                          !userAuthorities?.includes("READ_ACCOUNT")
                        ) && "Not Authorized"
                      }`}
                    >
                      <Button
                        className="ml-2 border"
                        size="sm"
                        variant="secondary"
                        disabled={
                          loading ||
                          !(
                            userAuthorities?.includes("EDIT_ACCOUNT") ||
                            !userAuthorities?.includes("READ_ACCOUNT")
                          )
                        }
                      >
                        <CheckCheck className="mr-2 h-4 w-4" />
                        Approve
                      </Button>
                    </div>
                  )}
              </div>
              <div
                className={`${
                  !(
                    userAuthorities?.includes("WRITE_EMAIL") ||
                    userAuthorities?.includes("EDIT_EMAIL")
                  ) && "cursor-not-allowed"
                }`}
                title={`${
                  !(
                    userAuthorities?.includes("WRITE_EMAIL") ||
                    userAuthorities?.includes("EDIT_EMAIL")
                  )
                    ? "Not Authorized"
                    : ""
                }`}
              >
                <Button
                  disabled={
                    !(
                      userAuthorities?.includes("WRITE_EMAIL") ||
                      userAuthorities?.includes("EDIT_EMAIL")
                    )
                  }
                  className="border-none hover:bg-transparent"
                  variant="outline"
                >
                  <EmailButton
                    customers={table.getFilteredSelectedRowModel().rows}
                  />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className={`${clickable && "cursor-pointer"}`}
                  // onClick={() =>
                  //   clickable &&
                  //   // @ts-ignore
                  //   router.push(`/admin/accounts/${row.original.phone}`)
                  // }
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
