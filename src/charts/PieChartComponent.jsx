import { PieChart, Pie, Tooltip } from "recharts";

const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
];

const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
];

const PieChartComponent = () => {
  return (
    <div>
        <PieChart width={300} height={300}>
            <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#2c9fd8" />
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} fill="#31c2a9" label/>
            <Tooltip content={<CustomToolTip />} />
        </PieChart>
    </div>
  )
}

const CustomToolTip = ({active, payload}) => {
    
    if(active && payload && payload.length) {
        return (
            <div className="bg-gray rounded-md p-4
             border border-lightgray">
              <p className="label text-green">{payload[0].name}</p>
              <p className="value text-white">{'$ ' + payload[0].value}</p>
            </div>
        )
    }
}

export default PieChartComponent;