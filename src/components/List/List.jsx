import React ,{useState,useEffect,createRef}from 'react'
import { CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select } from '@mui/material';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
export default function List({places,childClicked,isLoading}) {
  const[type,setType] = useState('restaurants');
  const[rating,setRating] = useState('');

  const [elRefs,setElRefs] = useState([]);

  useEffect(()=>{
const refs = Array(places?.length).fill().map((_,i)=> elRefs[i] || createRef())
  setElRefs(refs)
},[places])
//   const places = [{name:'cool place'},
// {name:"best beer"},
// {name:'best pubs'},
// {name:"best chicken"}
// ]
  return (
    <>
      <div className='p-6'>
        <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
        
{isLoading ? (
  <div>
    loading.......
  </div>
):(
  <>
  <FormControl className='w-[140px]  '>
          <InputLabel className='my-2'>Type</InputLabel>
          <Select className='my-6' value={type} onChange={(e)=>setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>

        <FormControl className='w-[110px] '>
          <InputLabel  className='my-6'>Rating</InputLabel>
          <Select className='my-6 mx-2' value={rating} onChange={(e)=>setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>

        <Grid container spacing={3} className='list'>
          {places?.map((place,i)=>(
           <Grid ref={elRefs[i]} item key={i} xs={12}>
            <PlaceDetails place={place}
            selected={Number(childClicked === i)}
            refProps={elRefs[i]}
            ></PlaceDetails>
           </Grid>
          )

          )}
        </Grid>
  </>
)}

        
      </div>
    </>
  )
}
