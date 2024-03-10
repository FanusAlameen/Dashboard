import { useState } from "react"
import { cards } from "../data"
import { CiSearch } from "react-icons/ci"
import Table from "../reusables/Table"
import ExportButton from "../reusables/ExportButton"
import billData from '../data/BILL_DATA.json'
import Chartgrid from "../reusables/Chartgrid"


const Bills = () => {
  const [filtering, setFiltering] = useState('')

  /** @type import('@tanstack/react-table').columnDef<any> */
  const columns = [
    {
      header: 'ID',
      accessorKey: 'id'
    },
    {
      header: 'Client',
      accessorKey: 'client_name',
    },
    {
      header: 'Payment',
      accessorKey: 'payment_method'
    },
    {
      header: 'Status',
      accessorKey: 'payment_status'  
    },
    {
      header: 'Amount ($)',
      accessorKey: 'amount'
    }, 
    {
      header: 'Date',
      accessorKey: 'date'
    }
  ]

  return (
    <div className="bg-lightgray h-full py-6 px-10 flex flex-col gap-8 items-start overflow-y-scroll overflow-x-hidden">

      <h1 className="main-heading-dark mt-1">
        Bills
      </h1>

      <hr className="w-full border border-lightblue" />

      <div className="w-full flex flex-row flex-wrap items-start gap-8">
        {cards.map(card => (
          <Chartgrid
           key={card.id}
           title={card.title}
           content={card.content}
           percentage={card.percentage}
           profit={card.profit} 
          />
        ))}  
      </div>

      <hr />

      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="main-heading-dark mt-1">
          Payments
        </h1>
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

        <ExportButton data={billData} fileName={"payments"} />
      </div>

      <div className="w-full">
        <Table 
         columns={columns} 
         componentData={billData} 
         filtering={filtering} 
         setFiltering={setFiltering} 
        />
      </div>

    </div>
  )
}

export default Bills