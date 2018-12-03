import React from 'react'
import { places } from './Place/places';
import { Link } from 'react-router-dom';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'

import FooterIns from './Footer/FooterIns';

const PlaceSearch = ({match}) => {
  const place = places.find(i => i.id === parseInt(match.params.id))

  const position = place.coordinate
  console.log(position)
  const mapStyle = {
  height: '400px'
  };
  if (!place) {
    return(
      <div>
        <Link to="/"> <h3>Back </h3></Link>
        <h1>Sorry, but the places was not found</h1>
      </div>
    )
  }
  return (
    <div>
    <Link to="/"> <h3>Back </h3></Link>
    <LeafletMap
        style={mapStyle}
        center={position}
        zoom={15}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup position={position} style={{width: 'auto',height: 'auto'}}>
            <p> Ini Lokasi yang Anda Cari </p>
          </Popup>
        </Marker>
    </LeafletMap>
    <h2>Name: {place.name}</h2>
    <h2>Lokasi: {place.location} </h2>
    <h2>Contact: {place.telephone} </h2>
    <FooterIns />
    </div>
  )
}

export default PlaceSearch




















