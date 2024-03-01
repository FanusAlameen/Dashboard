import PieChartComponent from "../charts/PieChartComponent"
import RadarChartComponent from "../charts/RadarChartComponent"

const Chartgrid2 = ({prop}) => {
  const pie = prop;
  return (
    <div className="w-4/12 p-3 bg-white flex flex-col
    items-start justify-center gap-5 shadow-lg rounded-md">
        <p className="paragraph-dark 
        font-semibold"
        >
            Product Sales
        </p>

        <div className="self-center">
          {pie ? <PieChartComponent /> : <RadarChartComponent />}
        </div>
    </div>
  )
}

export default Chartgrid2