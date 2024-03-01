import { ImArrowUp, ImArrowDown } from "react-icons/im";
import BarChartComponent from "../charts/BarChartComponent";

const Chartgrid = ({title, content, percentage, profit}) => {
  return (
    <div className="w-4/12 p-3 bg-white flex flex-row
    items-center justify-between flex-1 shadow-lg rounded-md">
     <div className="flex flex-col items-start
     gap-3">
        <p className="paragraph-dark 
        font-semibold"
        >
            {title}
        </p>
        <p className="paragraph-dark 
        text-xl font-bold"
        >
            {content}
        </p>
        <p className={profit ? "paragraph-light font-medium flex flex-row gap-2 items-start text-green" : "paragraph-light font-medium flex flex-row gap-2 items-start text-red"}
        >
            {profit ? <ImArrowUp /> : <ImArrowDown />} {percentage}
        </p>
     </div>

     <div>
        <BarChartComponent />
     </div>
        
    </div>
  )
}

export default Chartgrid