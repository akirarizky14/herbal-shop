import React from 'react'
import '../../../css/Contactus/Contactus.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Contactus() {
  const center = [51.505, -0.09];
  return (
    <div className='container-contactus'>
        <div className="wrapper-contactus">
          <div className="top-contactus">
            <h1 className='req'>Request</h1>
            <h1 className='cb'>A Call back</h1>
          </div>
          <div className="middle-contactus">
            <div className="middle-left-contactus">
              <input type="text" name="" id="" placeholder='Name' />
              <input type="text" name="" id="" placeholder='Email' />
              <input type="text" name="" id="" placeholder='Phone Number' />
              <input className='message-contactus' type="text" name="" id="" placeholder='Message' />
              <button>SEND</button>
            </div>
            <div className="middle-right-contactus">
              <div className="box-maps">
                <MapContainer className='box-maps-details' center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={center} />
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contactus