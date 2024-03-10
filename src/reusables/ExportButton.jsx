import { BiExport } from "react-icons/bi";
import * as XLSX from 'xlsx/xlsx.mjs';

const ExportButton = ({data = [], fileName}) => {
  return (
    <button className="export-btn" onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx` : "data.xlsx");
    }}> 
     <BiExport className="text-xl"/> Export
    </button>
  )
}

export default ExportButton