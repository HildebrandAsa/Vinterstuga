import { Map, Marker } from "pigeon-maps"

const MapPage = () => {

  return (
    <div className="map-container">
      <div className="heading-container">
        <h1>Hitta hit</h1>
      </div>
        <div>
          <h3>Här ligger Lassiebyn!</h3>
        </div>
        <Map height={500} width={600} defaultCenter={[60.66196690192356, 12.965071748972523]} defaultZoom={12}>
        <Marker width={50} anchor={[60.66196690192356, 12.965071748972523]} />
        </Map>
    </div>
  )
}

export default MapPage