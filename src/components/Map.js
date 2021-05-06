/* eslint-disable no-unused-vars */
import React, { useState }  from 'react'
//import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'

const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: props.position[0],
    longitude: props.position[1],
    width: '100%',
    height: '100%',
    zoom: 4
  })
  const [showPopUp, setShowPopUp] = useState(false)

  //"mapbox://styles/zeky/ckno9lz4x3mml17pmiyu6amip"

  return (
    <div id='map-container'>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken='pk.eyJ1IjoiemVreSIsImEiOiJja25tdGdiMnQwN3ZqMm5sYWh2dHU0bjRtIn0.DQ355eGSSydRc9WWwMD2SA'
        mapStyle="mapbox://styles/zeky/ckno9lz4x3mml17pmiyu6amip"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        <Marker
          latitude={props.position[0]}
          longitude={props.position[1]}
        >
          <span id='marker-span' onClick={() => setShowPopUp(!showPopUp)}>
            <img src="/person-pin.png"/>
          </span>
        </Marker>
        {
          showPopUp
            ?
            <Popup
              latitude={props.position[0]}
              longitude={props.position[1]}
              onClose={() => setShowPopUp(false)}
            >
              <span style={{ fontSize: '12px', width: '30px' }}>
                {props.name}
              </span>
            </Popup>
            :
            null
        }
      </ReactMapGL>
    </div>
  )

}

export default Map

/*
      <MapContainer center={props.position} zoom={11} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={props.position}>
          <Popup>
            {props.name}
          </Popup>
        </Marker>
      </MapContainer>

*/