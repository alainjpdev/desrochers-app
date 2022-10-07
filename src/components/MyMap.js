import { GoogleMap, Marker } from "react-google-maps"


export default function MyMap(){
<GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 20.199167,lng:-87.459697 }}
  >
    {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
  </GoogleMap>

{/* <MyMap isMarkerShown />// Map with a Marker
<MyMap isMarkerShown={false} />// Just only Map */}



}

  