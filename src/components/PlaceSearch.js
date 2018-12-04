import React from 'react'
import { places } from './Place/places';
import { Link } from 'react-router-dom';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'

import FooterIns from './Footer/FooterIns';

const style = {
  paddingLeft: 15,
  color: "white",
  textDecoration: "underline"
}

const PlaceSearch = ({match}) => {
  const place = places.find(i => i.id === parseInt(match.params.id))

  const mapStyle = {
  height: '400px'
  };
  if (!place) {
    return(
      <div>
        <Link to="/"> <h3 style={style}>Back </h3></Link>
        <h1>Sorry, but the places was not found</h1>
      </div>
    )
  }
  return (
    <div>
    <Link to="/"> <h3 style={style}>Back </h3></Link>
    <LeafletMap
        style={mapStyle}
        center={place.coordinate}
        zoom={15}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={place.coordinate}>
          <Popup position={place.coordinate} style={{width: 'auto',height: 'auto'}}>
            <p> Ini Lokasi yang Anda Cari </p>
          </Popup>
        </Marker>
    </LeafletMap>
    <div
        style={{
          paddingLeft: 10,
          color: "white"
        }}
      >
      <h2>Name: {place.name}</h2>
      <h2>Lokasi: {place.location} </h2>
      <h2>Contact: {place.telephone} </h2>
      <FooterIns />
    </div>
    </div>
  )
}

export default PlaceSearch




















