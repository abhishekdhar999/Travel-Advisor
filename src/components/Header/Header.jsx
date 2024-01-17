import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';

// import useStyles from './Style'
// classes={{root:classes.inputRoot,input:classes.inputInput}}

export default function Header({setCoordinates}) {
    
// const Classes =useStyles();
const [autocomplete,setAutocomplete] = useState(null);
const onLoad = (autoC) =>setAutocomplete(autoC);

const onPlaceChanged = ()=>{
  const lat = autocomplete.getPlace().geometry.location.lat();
  const lng = autocomplete.getPlace().geometry.location.lng();

  setCoordinates({lat,lng})
}


  return (
    <>
      {/* navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
            {/* <!-- Logo --> */}
            <a href="#" className="text-white text-2xl font-bold">Travel Point</a>
            
            {/* <!-- Navigation Links --> */}
            <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
            
            {/* <!-- Search Bar --> */}
           {/* <Autocomplete></Autocomplete> */}
            <div className="relative">
                <input onLoad={onLoad} onPlaceChanged={onPlaceChanged} type="text" className="bg-white text-gray-700 rounded-full pl-8 pr-4 py-2 w-48 focus:outline-none focus:ring focus:border-blue-300" placeholder="Search"/>
                <div className="absolute left-2 top-2 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.78-4.79a8 8 0 10-1.41 1.41L21 21zm-9.01-9.01a4.5 4.5 0 116.32-6.32 4.5 4.5 0 01-6.32 6.32z" />
                    </svg>
                </div>
            </div>
            
        </div>
    </nav>

    <div className='grid'>

      
    </div>





    </>
  )
}

