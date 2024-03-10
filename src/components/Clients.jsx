import clientData from '../data/CLIENT_DATA.json';
import Table from "../reusables/Table";
import ExportButton from '../reusables/ExportButton';
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Clients = () => {
  const [filtering, setFiltering] = useState('')

  /** @type import('@tanstack/react-table').columnDef<any> */
  const columns = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Client',
        accessorKey: 'client',
    },
    {
        header: 'Document Name',
        accessorKey: 'document_name',
    },
    {
        header: 'Category',
        accessorKey: 'category',
    },
    {
        header: 'Upload Date',
        accessorKey: 'upload_date',
    },
]

  return (
    <div className="bg-lightgray h-full py-6 px-10 flex flex-col gap-8 items-start overflow-y-scroll overflow-x-hidden">

      <h1 className="main-heading-dark mt-1">
         Clients
      </h1>

      <hr className="w-full border border-lightblue" />

      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row self-center">
          <input 
           type="text" 
           placeholder="Search..."
           value={filtering}
           onChange={(e) => setFiltering(e.target.value)} 
           className="outline-none px-2 py-1 bg-white paragraph-dark shadow-md rounded-l-md"
          />

          <div
           className="outline-none px-2 py-1 bg-white paragraph-dark text-lightblue font-semibold text-2xl shadow-md rounded-r-md"
          >
            <CiSearch />
          </div>
        </div>

        <ExportButton data={clientData} fileName={"clients"} />
      </div>

      <div className="w-full">
        <Table 
         columns={columns} 
         componentData={clientData} 
         filtering={filtering} 
         setFiltering={setFiltering} 
        />
      </div>
    </div>
  )
}

export default Clients