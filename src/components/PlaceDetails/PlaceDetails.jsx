import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
// import {Box,Typography,Button ,Card ,CardMedia ,CardContent,CardActions,Chip} from '@material-ui/core'
// import LocationOnIcon from '@material-ui/icons/LocationOnIcon';
// import PhoneIcon from '@material-ui/icons/Phone'
// import Rating from '@material-ui/lab/Rating';

export default function PlaceDetails({ place,selected,refProp }) {
  
  if(selected) refProp?.current?.scrollIntoView({behavior:"smooth",block:"start"})
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src={place.photo ? place.photo.images.large.url : ""}
        alt=""
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {place.name}
        </h5>
      </div>

      <div className="flex justify-between">
        <div className="text-white">
          <p className="text-l">Price</p>
        </div>

        <div className="text-white">{place.price_level}</div>
      </div>

      <div className="flex justify-between">
        <div className="text-white">
          <p className="text-l">Ranking</p>
        </div>

        <div className="text-white">{place.ranking}</div>
      </div >

      {place?.awards?.map((award) =>(
          <div className="flex justify-between">
            <img src={award.images.small} alt={award.display_name} />
            <div className="text-white">{award.display_name}</div>
          </div>
      ))}

      {place?.cuisine?.map(({name})=>(
              <div className="text-white flex ">
<div className="">
<span class= " bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{name}</span>
</div>
                 
               </div>
      ))}

      {place?.address && (
         <div className="text-white my-3 flex justify-between">
          <div className="my-4 "><CiLocationOn className="h-5 w-10" /> </div>
          <div className="mx-4">{place.address}</div>
         </div>
      )}

{place?.phone && (
         <div className="text-white my-3 flex justify-between">
          <div className="my-2 "><CiPhone className="h-5 w-10"/> </div>
          <div className="mx-4">{place.phone}</div>
         </div>
      )}

      <div className="flex justify-around" >
        <div className="">
        <button onClick={()=>window.open(place.website,'_blank')} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">restaurant website</button>
        </div>
        <div className="">
        <button onClick={()=> window.open(place.web_url,'_blank')} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Trip Advisor</button>
        </div>
      </div>
    </div>

    //     <Card elevation={6}>
    //       <CardMedia
    //       style={{height:350}}
    //       image={place.photo ? place.photo.images.large.url : "" }
    //       title={place.name}
    //       />

    // <CardContent>
    //   <Typography gutterBottom variant= "h5">{place}</Typography>
    // </CardContent>

    //     </Card>
  );
}
