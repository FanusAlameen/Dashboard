import LineChartComponent from "../charts/LineChartComponent"
import ScatterCharComponent from "../charts/ScatterCharComponent"

const Chartgrid3 = ({prop}) => {
  const line = prop;
  return (
    <div className='w-4/12 p-3 bg-white flex flex-col
     gap-5 flex-grow shadow-lg rounded-md'>
        <p className="paragraph-dark 
        font-semibold"
        >
            Revenue
        </p>

        <div className="self-center">
          {line ? <LineChartComponent /> : <ScatterCharComponent />}
        </div>
    </div>
  )
}

export default Chartgrid3