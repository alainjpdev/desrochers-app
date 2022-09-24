import React, { useState } from 'react'

import { GoogleMap, Marker,  Polygon,  BicyclingLayer, outerBoundaryIs, Polyline  } from "react-google-maps"
import InfoWindowOptions from 'react-google-maps/lib/components/InfoWindow'

import withGoogleMap from "react-google-maps/lib/withGoogleMap"
import withScriptjs from "react-google-maps/lib/withScriptjs"

import mapStyle from "../mapStyle"
import apartmentsData from "./data/apartments.json"
import aldeaGraphic from "./data/aldeaGraphic"



{/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
   
    
    {/* <MyMap isMarkerShown />// Map with a Marker
    <MyMap isMarkerShown={false} />// Just only Map */}

function MyMap(){

  const triangleCoords=  [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
  ];


    const [selectedAparment, setSelecetedAparment ] = useState(null);

   return(
     <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: 20.199167, lng: -87.459697 }}
        defaultOptions={{styles: mapStyle}}
      > 
        {apartmentsData.features.map(apartment => (
            <Marker 
                key={apartment.properties.PARK_ID} 
                position={{ 
                    lat: apartment.geometry.coordinates[1],
                    lng: apartment.geometry.coordinates[0]
                 }}
                 onClick={()=>{
                    setSelecetedAparment(apartment)
                 }}
                //  title={"hello"}
               
                 icon={{
                  // url: "/desrochers_adobe_express.svg",
                  // url: "/skateboarding.svg",
                  scaledSize: new window.google.maps.Size(105, 105)
                 }}
            />
        ))}
        {selectedAparment && (
            <InfoWindowOptions
                 position={{ 
                    lat: selectedAparment.geometry.coordinates[1],
                    lng: selectedAparment.geometry.coordinates[0]
                 }}
                 onCloseClick={()=>{
                    setSelecetedAparment(null)
                 }}
            
             
              
                 ><div>
                    <h2>{selectedAparment.properties.NAME}</h2> 
                    <p>{selectedAparment.properties.NAME}</p>
                  </div>


            </InfoWindowOptions>
        )}
        <BicyclingLayer autoUpdate />
       
        <Polygon
        path={ triangleCoords }
        strokeColor= {"#FF0000"}
        strokeOpacity= {0.1}
        strokeWeight= {3}
        fillColor= {"#ff0000"}
        fillOpacity= {0.1}
        fillColor={"red"}
        // visible={false}

         />
    
    </GoogleMap>
        
    );
    
    
    }

const WrappedMap = withScriptjs(withGoogleMap(MyMap))
function Home() {
  return (
    <>    
    {/* <div style={{width: "100vw", height:"100vw"}}>
    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
    libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
     loadingElement={<div style={{ height: `100%` }} />}
     containerElement={<div style={{ height: `650px` }} />}
     mapElement={<div style={{ height: `100%` }} />} 
     /> */}

    <div style={{width: "100vw", height:"100vw"}}>
    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
    libraries=geometry,drawing,places`}
     loadingElement={<div style={{ height: `100%` }} />}
     containerElement={<div style={{ height: `650px` }} />}
     mapElement={<div style={{ height: `100%` }} />} 
     />
     </div>
    </>

  )
}

export default Home