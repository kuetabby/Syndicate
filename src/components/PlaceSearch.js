import React from 'react'
import { places } from './Place/places';
import { Link } from 'react-router-dom';
import ReactMapboxGl, { Source, Popup } from "react-mapbox-gl";

import FooterIns from './Footer/FooterIns';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoia3VldGFiYnkiLCJhIjoiY2psbmNham5rMWhocTN2bjdxYXo2Y29rMiJ9.owkPCPzjsCYupwR3IKoNtA'
});
const RASTER_SOURCE_OPTIONS = {
  "type": "raster",
  "tiles": [
    "mapbox://mapbox.satellite",
  ],
  "tileSize": 512
};

const PlaceSearch = ({match}) => {
  const place = places.find(i => i.id === parseInt(match.params.id))

  const clickMap = (e) =>{
    console.log(e);
  }
  if (!place) {
    return <div>Sorry, but the places was not found</div>
  }
  return (
    <div>
    <Link to="/"> <h3>Back </h3></Link>
    <Map
        style={"mapbox://styles/mapbox/streets-v9"}
        center={[106.8271528, -6.1753924]}
        zoom={[13]}
        containerStyle={{
          height: "50vh",
          width: "100%"
        }}>
        <Source id="source_id" tileJsonSource={RASTER_SOURCE_OPTIONS} />
        <Popup
          coordinates={[106.8313176, -6.1699753]}
          style={{width:'80px', height:'30px'}}
          onClick={clickMap}
              offset={{
              'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                }}>
          <img width='100%' height='100%' src={''} alt="Masjid Istiqlal"/>
        </Popup>
    </Map>
    <h1>{ place.name }</h1>
    <h2>{ place.location } </h2>
    <h2>{ place.telephone} </h2>
    <FooterIns />
    </div>
  )
}

export default PlaceSearch




















