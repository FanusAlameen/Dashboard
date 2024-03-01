import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts"

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
]

const LineChartComponent = () => {
  return (
    <LineChart width={700} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Tooltip content={CustomToolTip} />
        <Line type="monotone" dataKey="pv" stroke="#2c9fd8" />
        <Line type="monotone" dataKey="uv" stroke="#31c2a9" />
    </LineChart>
  )
}

const CustomToolTip = ({active, payload, label}) => {
    <Tooltip content={<CustomToolTip />} />
    if(active && payload && payload.length) {
        return (
            <div className="p-4 bg-gray flex flex-col 
             gap-4 rounded-md border border-lightgray">
                <p className="paragraph-light text-medium">{label}</p>
                <p className="paragraph-light text-sm text-blue">
                    Product 1 : 
                    <span className="ml-2">$ {payload[0].value}</span>
                </p>
                <p className="paragraph-light text-sm text-indigo-500">
                    Product 2 :
                    <span className="ml-2">$ {payload[1].value}</span>
                </p>
            </div>
        )
    }
}

export default LineChartComponent