import React from 'react'
import GoogleMapReact from 'google-map-react';
import { CiLocationOn } from "react-icons/ci";
import { Paper } from '@mui/material';
// import useMediaQuery from '@mui/material';

export default function Map({setCoordinates,setBounds,coordinates,places,setChildClicked,weatherData}) {
  
  // const coordinates = {lat:0,lng:0}
  // const [childClick,setChildClick] = useState(initialState)
  return (
    <div>
      <div className='h-[85vh] w-[100-%]'>
      
        <GoogleMapReact
        
        bootstrapURLKeys={{key:""}}
        defaultCenter={coordinates}
        center = {coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
         options={""}
         onChange={(e) =>{
          setCoordinates({ lat:e.center.lat ,lng:e.center.lng});
          setBounds({ne:e.marginBounds.ne,sw: e.marginBounds.sw})
         }}
        //  onChildClick={(child) => setChildClicked(child){

        //  }}
        >
          {places?.map((place,i)=>(
            <div className='' lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
              {<CiLocationOn className=''/> }
              <img src={place.photo ? place.photo.images.large.url:place.name} alt={place.name} />
                {/* // isMobile ? (<CiLocationOn className=''/> )
                // : ( <div></div>
                //   // <Paper elevation={3} className=''>
                      
                //   // </Paper>
                // ) */}
              <div>{place.rating}</div>
               </div>
               
          ))}

          {weatherData?.list?.map((data,i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lng}>
              <img src={data.weather[0].icon} alt="" />
            </div>

          ))}
        </GoogleMapReact>
      </div>
    </div>
  )
}
