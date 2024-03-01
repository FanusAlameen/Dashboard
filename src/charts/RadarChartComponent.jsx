import { RadarChart, Radar, PolarGrid, PolarAngleAxis, Tooltip } from "recharts";

const data = [
    {
      "subject": "Ryzen",
      "A": 120,
      "B": 110,
      "fullMark": 150
    },
    {
      "subject": "intel",
      "A": 98,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "RAM",
      "A": 86,
      "B": 130,
      "fullMark": 150
    },
    {
      "subject": "CPU",
      "A": 99,
      "B": 100,
      "fullMark": 150
    },
    {
      "subject": "GTX",
      "A": 85,
      "B": 90,
      "fullMark": 150
    },
    {
      "subject": "RTX",
      "A": 65,
      "B": 85,
      "fullMark": 150
    }
]

const RadarChartComponent = () => {
  return (
    <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Tooltip content={<CustomToolTip />} />
        <Radar name="Lenovo" dataKey="A" stroke="#D24545" fill="#D24545" fillOpacity={0.6} />
        <Radar name="Dell" dataKey="B" stroke="#31c2a9" fill="#31c2a9" fillOpacity={0.6} />
    </RadarChart>
  )
}

const CustomToolTip = ({active, payload, label}) => {
    
    if(active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="paragraph-light text-medium">{label}</p>
                <p className="paragraph-light text-sm text-blue">
                    Lenovo: 
                    <span className="ml-2">{payload[0].value}</span>
                </p>
                <p className="paragraph-light text-sm text-indigo-500">
                    Acer:
                    <span className="ml-2">{payload[1].value}</span>
                </p>
            </div>
        )
    }
}

export default RadarChartComponent