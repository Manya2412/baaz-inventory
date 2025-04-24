// components/DataTable.tsx
import React, { useMemo, useState } from "react";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export interface Column<T> {
  accessor: keyof T & string;
  header: string;
  Cell?: (value: T[keyof T], row: T) => React.ReactNode;
  sortable?: boolean;
  filterFn?: (value: T[keyof T], filter: string) => boolean;
}

interface Props<T> {
  data: T[];
  columns: Column<T>[];
  pageSizeOptions?: number[];
  initialPageSize?: number;
  className?: string;
}


export default function DataTable<T extends Record<string, any>>({
  data,
  columns,
  pageSizeOptions = [10, 25, 50],
  initialPageSize = 10,
  className = "",
}: Props<T>) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<Record<string, string>>({});
  const [sortBy, setSortBy] = useState<{ key: string; asc: boolean } | null>(
    null
  );
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [page, setPage] = useState(0);

  /** Filtered + sorted data */
  const processed = useMemo(() => {
    let rows = [...data];

    // Global filter
    if (globalFilter) {
      rows = rows.filter((row) =>
        JSON.stringify(row).toLowerCase().includes(globalFilter.toLowerCase())
      );
    }
    // Column filters
    Object.entries(columnFilters).forEach(([key, filter]) => {
      if (!filter) return;
      const col = columns.find((c) => c.accessor === key);
      rows = rows.filter((row) => {
        const val = row[key];
        const fn = col?.filterFn || defaultFilterFn;
        return fn(val, filter);
      });
    });

    // Sorting
    if (sortBy) {
      const { key, asc } = sortBy;
      rows.sort((a, b) => {
        const res = a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
        return asc ? res : -res;
      });
    }

    return rows;
  }, [data, globalFilter, columnFilters, sortBy, columns]);

  const pageCount = Math.ceil(processed.length / pageSize);
  const paginated = useMemo(() => {
    const start = page * pageSize;
    return processed.slice(start, start + pageSize);
  }, [processed, page, pageSize]);

  const toggleSort = (key: string) => {
    setSortBy((prev) => {
      if (!prev || prev.key !== key) return { key, asc: true };
      if (prev.asc) return { key, asc: false };
      return null; // unsorted
    });
  };

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      {/* Global search */}
      <div className="flex items-center gap-2 mb-2">
        <input
          type="text"
          placeholder="Search..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="border rounded px-2 py-1 w-full md:w-64"
        />
      </div>

      <table className="min-w-full text-sm">
        <thead className="bg-gray-800 text-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.accessor}
                className="p-3 text-left whitespace-nowrap select-none"
              >
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => col.sortable && toggleSort(col.accessor)}
                >
                  {col.header}
                  {col.sortable && (
                    <ArrowUpDown
                      size={14}
                      className={`transition-transform ${
                        sortBy?.key === col.accessor
                          ? sortBy.asc
                            ? "rotate-180"
                            : ""
                          : "opacity-20"
                      }`}
                    />
                  )}
                </div>
                {/* Column filter */}
                <input
                  type="text"
                  placeholder="Filter..."
                  value={columnFilters[col.accessor] || ""}
                  onChange={(e) =>
                    setColumnFilters({
                      ...columnFilters,
                      [col.accessor]: e.target.value,
                    })
                  }
                  className="mt-1 w-full border rounded px-1 py-px text-xs"
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginated.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 ? "bg-gray-900" : "bg-gray-800"}
            >
              {columns.map((col) => (
                <td key={col.accessor} className="p-3 whitespace-nowrap">
                  {col.Cell ? col.Cell(row[col.accessor], row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
          {paginated.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="p-4 text-center">
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex flex-col items-center gap-4 mt-3 sm:flex-row sm:justify-center">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage(0)}
            disabled={page === 0}
            className="p-1 disabled:opacity-30"
          >
            <ChevronsLeft size={18} />
          </button>
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="p-1 disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="px-2">
            Page {page + 1} of {pageCount || 1}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, pageCount - 1))}
            disabled={page + 1 >= pageCount}
            className="p-1 disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>
          <button
            onClick={() => setPage(pageCount - 1)}
            disabled={page + 1 >= pageCount}
            className="p-1 disabled:opacity-30"
          >
            <ChevronsRight size={18} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(0);
            }}
            className="border rounded px-1 py-1 text-sm"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

const defaultFilterFn = (value: any, filter: string) =>
  String(value).toLowerCase().includes(filter.toLowerCase());

  
 
  