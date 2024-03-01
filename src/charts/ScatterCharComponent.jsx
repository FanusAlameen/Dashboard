import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend } from "recharts"

const data01 = [
    {
      "x": 100,
      "y": 200,
      "z": 200
    },
    {
      "x": 120,
      "y": 100,
      "z": 260
    },
    {
      "x": 170,
      "y": 300,
      "z": 400
    },
    {
      "x": 140,
      "y": 250,
      "z": 280
    },
    {
      "x": 150,
      "y": 400,
      "z": 500
    },
    {
      "x": 110,
      "y": 280,
      "z": 200
    }
];

const data02 = [
    {
      "x": 200,
      "y": 260,
      "z": 240
    },
    {
      "x": 240,
      "y": 290,
      "z": 220
    },
    {
      "x": 190,
      "y": 290,
      "z": 250
    },
    {
      "x": 198,
      "y": 250,
      "z": 210
    },
    {
      "x": 180,
      "y": 280,
      "z": 260
    },
    {
      "x": 210,
      "y": 220,
      "z": 230
    }
];

const ScatterCharComponent = () => {
  return (
    <ScatterChart width={730} height={250}>
        <CartesianGrid strokeDasharray="6 6" />
        <XAxis dataKey="x" type="number" name="intel" unit="units" />
        <YAxis dataKey="y" type="number" name="Ryzen" unit="units" />
        <ZAxis dataKey="z" type="number" name="Nvidia" unit="units" />
        <Tooltip content={CustomToolTip} cursor={{strokeDasharray:'5 5'}} />
        <Legend />
        <Scatter name="RTX" data={data01} fill="#2c9fd8" />
        <Scatter name="GTX" data={data02} fill="#31c2a9" />
    </ScatterChart>
  )
}

const CustomToolTip = ({active, payload}) => {
    
    if(active && payload && payload.length) {
        return (
            <div className="bg-gray rounded-md p-4
             border border-lightgray">
              <p className="label text-green">{payload[0].name}</p>
              <p className="value text-white">{payload[0].value}</p>
            </div>
        )
    }
}

export default ScatterCharComponent