import "leaflet/dist/leaflet.css";
import { mapData } from "../data";
import {Circle, LayerGroup, MapContainer, TileLayer, Tooltip} from 'react-leaflet'
import './Reports.css'

const Reports = () => {
  const fillBlueOptions = { fillColor: 'blue' }

  return (
    <div className="bg-lightgray h-full py-6 px-10 flex flex-col gap-8 items-start overflow-y-scroll overflow-x-hidden">
      
      <h1 className="main-heading-dark mt-1">
         Reports (US)
      </h1>

      <hr className="w-full border border-lightblue" />

      <h1 className="main-heading-dark mt-1">
         Geographical Sales Data
      </h1>
      <div className='w-full h-full'>
        <MapContainer center={[40.103435059580896, -101.55892241671084]} zoom={5}>
          <TileLayer
           url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <LayerGroup>

            {mapData.map(eachData => (
              <Circle 
               key={eachData.id}
               center={eachData.center}
               pathOptions={fillBlueOptions}
               radius={eachData.radius}
              >
                <Tooltip>{eachData.area}</Tooltip>
              </Circle>
            ))}

          </LayerGroup>
        </MapContainer>
      </div>
    </div>
  )
}

export default Reports