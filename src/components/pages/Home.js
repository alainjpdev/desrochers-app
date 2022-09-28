import React, { useState } from 'react'

import { GoogleMap, Marker,  Polygon,  BicyclingLayer, outerBoundaryIs, Polyline  } from "react-google-maps"
import InfoWindowOptions from 'react-google-maps/lib/components/InfoWindow'

import withGoogleMap from "react-google-maps/lib/withGoogleMap"
import withScriptjs from "react-google-maps/lib/withScriptjs"

import mapStyle from "../mapStyle"
import apartmentsData from "./data/apartments.json"
import polygon1 from "./data/aldeaGraphic"



{/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
   
    
    {/* <MyMap isMarkerShown />// Map with a Marker
    <MyMap isMarkerShown={false} />// Just only Map */}

function MyMap(){
  const poly_1 = [
    { lat: 20.200244, lng: -87.460912 },   { lat:  20.200064, lng: -87.46068  }, { lat: 20.200072, lng: -87.460668}, { lat: 20.200091, lng: -87.460638},   
    { lat: 20.200102, lng: -87.460604 },   { lat:  20.200098, lng: -87.460549 }, { lat: 20.200075, lng: -87.460495}, { lat: 20.200045, lng: -87.46047 },   
    { lat: 20.199992, lng: -87.460447 },   { lat:  20.199931, lng: -87.460453 }, { lat: 20.199876, lng: -87.46048 }, { lat: 20.199849, lng: -87.460516},   
    { lat: 20.199834, lng: -87.460552 },   { lat:  20.199747, lng: -87.460536 }, { lat: 20.199761, lng: -87.460317}, { lat: 20.20003,  lng: -87.460253},  
    { lat: 20.200409, lng: -87.460779 },   { lat:  20.200244, lng: -87.460912 }]

 const poly_2 = [ 
  {lat: 20.199909, lng: -87.461139},{ lat: 20.199812, lng: -87.461158},  
  {lat: 20.199741, lng: -87.461138},{ lat: 20.199687, lng: -87.461108},  
  {lat: 20.199626, lng: -87.461049},{ lat: 20.19952,  lng: -87.460896}, 
  {lat: 20.199714, lng: -87.460655},{ lat: 20.199812, lng: -87.460666},  
  {lat: 20.199847, lng: -87.460673},{ lat: 20.199883, lng: -87.460704},  
  {lat: 20.199966, lng: -87.460729},{ lat: 20.200021, lng: -87.460708},  
  {lat: 20.200198, lng: -87.460948},{ lat: 20.199909, lng: -87.461139} 																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
  ]

 const poly_3 = [ 
   {lat: 20.199736, lng: -87.460236},{ lat: 20.199689, lng: -87.460107},   
   {lat: 20.199344, lng: -87.45961 },{ lat: 20.199496, lng: -87.459538},   
   {lat: 20.199971, lng: -87.460181},{ lat: 20.199736, lng: -87.460236}  																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
   ]

 const poly_4 = [ 
  {lat: 20.19927, lng: -87.459657},{ lat: 20.199629, lng: -87.460171},{ lat: 20.199644, lng: -87.460249},{ lat: 20.199679, lng:  -87.460394}, 
  {lat: 20.199666,lng: -87.460523},{ lat: 20.199542, lng: -87.46047 },{ lat: 20.199441, lng: -87.460398},{ lat: 20.199381, lng:  -87.460331}, 
  {lat: 20.199336,lng: -87.460277},{ lat: 20.199308, lng: -87.460206},{ lat: 20.199269, lng: -87.460135},{ lat: 20.199199, lng:  -87.460028}, 
  {lat: 20.199072,lng: -87.459916},{ lat: 20.199017, lng: -87.459879},{ lat: 20.199021, lng: -87.459791},{ lat: 20.19927,  lng: -87.459657}																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																											
  ]
  
const poly_5 = [ 
   {lat: 20.199344, lng:-87.460452},{ lat: 20.199409, lng: -87.460507},{ lat:20.199486, lng: -87.460566},{ lat: 20.199624, lng: -87.460623},  
   {lat: 20.199562, lng:-87.460729},{ lat: 20.199474, lng: -87.460825},{ lat:20.199424, lng: -87.460769},{ lat: 20.199385, lng: -87.460735},  
   {lat: 20.199337, lng:-87.460692},{ lat: 20.199295, lng: -87.46066 },{ lat:20.199344,	 lng: -87.460452}																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																					
   ]

   const poly_6 = [ 
    { lat: 20.198981, lng: -87.459992}, { lat: 20.199083, lng:-87.460073},{  lat:20.199153, lng: -87.460159},{ lat: 20.199203,lng: -87.460258},  
    { lat: 20.199225, lng: -87.460359}, { lat: 20.199224, lng:-87.460462},{  lat:20.199195, lng: -87.460593},{ lat: 20.199076,lng: -87.460538},  
    { lat: 20.198994, lng: -87.4605  }, { lat: 20.198906, lng:-87.460477},{  lat:20.198827, lng: -87.460465},{ lat: 20.198757,lng: -87.460456},  
    { lat: 20.198682, lng: -87.460452}, { lat: 20.198608, lng:-87.460455},{  lat:20.198524, lng: -87.460461},{ lat: 20.198422,lng: -87.460461},  
    { lat: 20.198348, lng: -87.460439}, { lat: 20.198272, lng:-87.460403},{  lat:20.198192, lng: -87.460333},{ lat: 20.198335,lng: -87.460217},  
    { lat: 20.198369, lng: -87.460228}, { lat: 20.198415, lng:-87.46022 },{  lat:20.198449, lng: -87.460184},{ lat: 20.198454,lng: -87.460139},  
    { lat: 20.198656, lng: -87.460027}, { lat: 20.1987,   lng:-87.460068},{  lat:20.198768, lng: -87.460085},{ lat: 20.198836,lng: -87.460085},  
    { lat: 20.198905, lng: -87.460064}, { lat: 20.198981,	 lng:-87.459992}																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																															
     ]

     const poly_7 = [ 
      {lat: 20.198606, lng: -87.459966}, { lat: 20.198423, lng: -87.460079},{ lat: 20.198382,lng: -87.460074},{lat:20.198331,lng: -87.460083},  
      {lat: 20.198309, lng: -87.460112}, { lat: 20.198298, lng: -87.460153},{ lat: 20.198139,lng: -87.460225},{lat:20.198111,lng: -87.460085},  
      {lat: 20.198131, lng: -87.459953}, { lat: 20.198177, lng: -87.459837},{ lat: 20.1983,  lng: -87.459436},{lat:20.198616,lng: -87.459542},  
      {lat: 20.198657, lng: -87.45968 }, { lat: 20.198607, lng: -87.459735},{ lat: 20.198583,lng: -87.459802},{lat:20.198575,lng: -87.459893},  
      {lat: 20.198606,	 lng: -87.459966}
       ]

       const poly_8 = [ 
  {lat: 20.198962, lng: -87.459701},{ lat: 20.198902, lng: -87.459657},{ lat:  20.198841,lng: -87.45964 },{ lat: 20.198759, lng:  -87.459631},  
  {lat: 20.198731, lng: -87.459547},{ lat: 20.198715, lng: -87.459449},{ lat:  20.198703,lng: -87.459362},{ lat: 20.198709, lng:  -87.459172},  
  {lat: 20.198716, lng: -87.458971},{ lat: 20.199067, lng: -87.45902 },{ lat:  20.199091,lng: -87.459196},{ lat: 20.199138, lng:  -87.45938 },  
  {lat: 20.199224, lng: -87.459563},{ lat: 20.198962,	lng: -87.459701}																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																		
         ]
const poly_9 = [ 
   {lat: 20.199053, lng:-87.45896 }, { lat: 20.198757, lng: -87.458901}, { lat: 20.198798, lng: -87.458752}, { lat: 20.198871,lng: -87.458587},  
   {lat: 20.198944, lng:-87.458457}, { lat: 20.199004, lng: -87.458227}, { lat: 20.19903,  lng: -87.458072}, { lat: 20.19913, lng: -87.458115}, 
   {lat: 20.199181, lng:-87.458213}, { lat: 20.199096, lng: -87.458495}, { lat: 20.199075, lng: -87.458663}, { lat: 20.199053,	lng: -87.45896}, 																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
    ]

    const poly_10 = [ 
      { lat: 20.198606, lng: -87.459463},{ lat: 20.198335, lng: -87.459358},  
      { lat: 20.198516, lng: -87.458801},{ lat: 20.198624, lng: -87.45885 },  
      { lat: 20.198583, lng: -87.459128},{ lat: 20.198589, lng: -87.459305},  
      { lat: 20.198606, lng: -87.459463}																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
       ]

       
 const poly_11 = [ 
  {lat: 20.199171, lng: -87.45925 },{ lat:  20.199135,lng:  -87.458874}, 
  {lat: 20.199309, lng: -87.458882},{ lat: 20.199314, lng: -87.459044 },
  {lat: 20.199352, lng: -87.459201},{ lat: 20.199448, lng: -87.459435 },
  {lat: 20.199299,  lng: -87.459515},{ lat: 20.199171,	lng: -87.45925  }																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																										
   ]

   const poly_12 = [ 
    { lat: 20.199324, lng: -87.458811 }, { lat: 20.199129, lng: -87.458816 }, 
    { lat: 20.199155, lng: -87.458507 }, { lat: 20.199212, lng: -87.4583   },  
    { lat: 20.199246, lng: -87.458268 }, { lat: 20.199319, lng: -87.458246 }, 
    { lat: 20.199351, lng: -87.458276 }, { lat: 20.199398, lng: -87.458387 },  
    { lat: 20.199378, lng: -87.458476 }, { lat: 20.199324, lng: -87.458811 }																																																																																																																																																																																																																																																																																																																																																																																																																																																																																		
  ]

  const poly_13 = [ 
    {lat: 20.198642,lng: -87.4588  },{ lat:  20.19853,  lng: -87.458747}, 
    {lat: 20.198791,lng: -87.457977},{ lat:  20.198901, lng: -87.458024},  
    {lat: 20.198889,lng: -87.458171},{ lat:  20.198851, lng: -87.458327},  
    {lat: 20.198798,lng: -87.458467},{ lat:  20.198718, lng: -87.458609},  
    {lat: 20.198642,	lng: -87.4588  }
     ]

  const triangleCoords=  [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
  ];

  const one = [{lat: 20.200077, lng: -87.460497},{ lat: 20.20016,  lng: -87.460434}] 
  const two = [{lat: 20.199934, lng: -87.460453},{ lat: 20.199906, lng: -87.460283 }]



    const [selectedAparment, setSelecetedAparment ] = useState(null);

   return(
     <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 20.199167, lng:-87.459697 }}
        defaultOptions={{styles: mapStyle}}
        // mapTypeId= {'satellite'}
      > 
        {/* {apartmentsData.features.map(apartment => (
            <Marker 
                key={apartment.properties.PARK_ID} 
                position={{ 
                    lat: apartment.geometry.coordinates[1],
                    lng: apartment.geometry.coordinates[0]
                 }}
                 onClick={()=>{
                    setSelecetedAparment(apartment)
                 }}
                 title={"hello"}
               
                 icon={{
                  url: "/desrochers_adobe_express.svg",
                  url: "/skateboarding.svg",
                  scaledSize: new window.google.maps.Size(105, 105)
                 }}
            />
        ))} */}
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
          paths={ poly_1}
          strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}

         />
         <Polygon
        paths={ poly_2}
        strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}

         />
              <Polygon 
          paths={ poly_3}
          strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}

         />
          <Polygon 
          paths={ poly_4}
          strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}

         />
         <Polygon 
          paths={ poly_5}
          strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}
         />
         <Polygon 
          paths={ poly_6}
          strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}
         />

<Polygon 
          paths={ poly_7}
          strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}
         />

<Polygon 
    paths={ poly_8}
    strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}
         />

<Polygon 
    paths={ poly_9}
    strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}
         />

<Polygon 
    paths={ poly_10}
    strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}
         />

<Polygon 
    paths={ poly_11}
    strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}
         />

<Polygon 
    paths={ poly_12}
    strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}
         />

<Polygon 
    paths={ poly_13}
    strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        fillColor={"red"}
        fillColor={'green'}
        visible={true}
         />

<Polyline
    path={one}
    strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        visible={true}
         />
         <Polyline
    path={two}
    strokeColor= {"#FF0000"}
        strokeOpacity= {1}
        strokeWeight= {1}
        fillColor= {"#ff0000"}
        fillOpacity= {1}
        visible={true}
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