import {
    useReactTable, 
    getCoreRowModel, 
    flexRender, 
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";

const Table = ({columns, componentData, filtering, setFiltering}) => {

    const data = useMemo(() => componentData, []) 

    const [sorting, setSorting] = useState([]);

    const table = useReactTable({
        data, 
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting: sorting,
            globalFilter: filtering
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering
    })

  return (
    <div className='w-full'>
        <table className='w-full bg-white rounded-md shadow-sm'>

            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id} className='paragraph-dark'>
                    {headerGroup.headers.map(header => (
                        <th key={header.id} className='border-x-2 border-lightgray p-2' onClick={header.column.getToggleSortingHandler()}>
                            {header.isPlaceholder
                              ? null 
                              : <div className='flex flex-row items-center justify-center gap-3'>
                                {
                                    flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                    )
                                }
                                {
                                {asc: <FaArrowUpLong />, desc: <FaArrowDownLong />}[
                                    header.column.getIsSorted() ?? null
                                ]
                            }
                              </div>
                            }
                            
                        </th>
                    ))}

                </tr>
            ))}

            <tbody className='w-full'>
                {table.getRowModel().rows.map((row, index) => (
                    <tr key={row.id} className={`${index % 2 !== 0 ? 'bg-white' : 'bg-mediumgrey'} paragraph-dark text-sm`}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className='py-4 border border-x-2 border-lightgray text-center'>
                                {cell.column.id === 'payment_status' ? (
                                    <span className={row.original.payment_status === 'Paid' ? 'text-darkgreen bg-lightgreen p-1 rounded-sm' : 'text-yellow bg-lightyellow p-1 rounded-sm'}>
                                        {row.original.payment_status}
                                    </span>
                                ) : (
                                    flexRender(cell.column.columnDef.cell, cell.getContext())
                                )}
                                {/* {flexRender(cell.column.columnDef.cell,
                                        cell.getContext())} */}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>

        </table>

        <div className='w-full flex flex-row-reverse gap-5 items-center justify-between mt-8'>
            <div className='w-3/12 flex flex-row justify-between'>
              <button className='content-button' onClick={() => table.setPageIndex(0)}>First Page</button>
              <button className='content-button' disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}><IoIosArrowBack /></button>
              <button className='content-button' disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}><IoIosArrowForward /></button>
              <button className='content-button' onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Last Page</button>
            </div>

            <div className='flex flex-row gap-2 items-center justify-center'>
                <p className='paragraph-dark text-md'>Page</p>
                <strong className='paragraph-dark text-md text-blue'>
                    {table.getState().pagination.pageIndex + 1} of {" "}
                    {table.getPageCount()}
                </strong>
            </div>

            <div>
                <label htmlFor="page-number" className='paragraph-dark text-sm'>Go to Page: </label>
                <input 
                 id='page-number'
                 type="number"
                 defaultValue={table.getState().pagination.pageIndex + 1}
                 onChange={(e) => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    table.setPageIndex(page);
                 }}
                 className='outline-none px-2 py-1 bg-white paragraph-dark shadow-md rounded-l-md' 
                />
            </div>
        </div>
    </div>
  )
}

export default Table