"use client";

import * as React from "react";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"; // Import Badge component
import Panel from "../../_components/Panel";
import coreApi from "@/lib/coreApi";

import TelephonyCall from './_components/TelephonyCall';

export type Loan = {
  id: number;
  client: string;
  loan_type: string;
  amount_disbursed: number;
  currency: string;
  disbursement_date: string;
  status: string;
  interest_rate: number;
  repayment_period_months: number;
  total_amount_due: number;
  reference_number: string;
  is_over_due: boolean; // Ensure this field is part of the Loan type
};

const LoansPage = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [data, setData] = React.useState<Loan[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  // Fetch data from /loans/ endpoint
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await coreApi.get("/loans/");
        const filteredData = response.data.filter((loan: Loan) => loan.is_over_due); // Filter only is_over_due loans
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching loans data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Columns definition for Loans
  const columns: ColumnDef<Loan>[] = [
    {
      accessorKey: "client",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div>{row.getValue("client")}</div>,
    },
    {
      accessorKey: "loan_type",
      header: "Loan Type",
      cell: ({ row }) => <div>{row.getValue("loan_type")}</div>,
    },
    {
      accessorKey: "is_over_due", // Add this column to display the is_over_due badge
      header: "Overdue",
      cell: ({ row }) => {
        const isOverdue = row.getValue("is_over_due") as boolean;
        return (
          <Badge variant={isOverdue ? "destructive" : "default"}>
            {isOverdue ? "Overdue" : "On Time"}
          </Badge>
        );
      },
    },
    {
      accessorKey: "amount_disbursed",
      header: "Amount Disbursed",
      cell: ({ row }) => <div>{row.getValue("amount_disbursed")}</div>,
    },
    {
      accessorKey: "currency",
      header: "Currency",
      cell: ({ row }) => <div>{row.getValue("currency")}</div>,
    },
    {
      accessorKey: "disbursement_date",
      header: "Disbursement Date",
      cell: ({ row }) => <div>{row.getValue("disbursement_date")}</div>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <div className="capitalize">{row.getValue("status")}</div>,
    },
    {
      accessorKey: "reference_number",
      header: "Reference Number",
      cell: ({ row }) => <div>{row.getValue("reference_number")}</div>,
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const loan = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(loan.id.toString())}
              >
                Copy loan ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View loan details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <Panel title="AI Telephony" action={<TelephonyCall />}>
      <div className="w-full">
        <div className="rounded-md border">
          {loading ? (
            <div className="p-4 text-center">Loading...</div>
          ) : (
            <Table className="bg-white dark:bg-slate-800 border dark:border-slate-700">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
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
                      No overdue loans.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </Panel>
  );
};

export default LoansPage;
