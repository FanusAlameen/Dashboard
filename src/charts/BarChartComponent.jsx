'use client';
import { BarChart, Bar } from "recharts";

const productSales = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
];

const BarChartComponent = () => {
    return (
        <BarChart width={200} height={100} data={productSales}>
          <Bar type="monotone" dataKey="pv" fill="#2c9fd8"/>
          <Bar type="monotone" dataKey="uv" fill="#31c2a9" />
        </BarChart>  
    )
}

/*const CustomToolTip = ({active, payload, label}) => {
    <Tooltip content={<CustomToolTip />} />
    if(active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium">{label}</p>
                <p className="text-sm text-blue">
                    Product 1: 
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-500">
                    Product 2:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        )
    }
}*/

export default BarChartComponent;