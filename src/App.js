import React from 'react';
import { useState,useEffect } from 'react';
 import CssBaseline from '@mui/material/CssBaseline';
 import Grid from '@mui/material/Grid'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import { ThemeProvider} from '@emotion/react';
import { createTheme } from '@mui/material';
import { getPlacesData ,getWeatherData} from './api';
const App =()=>{
    const [places,setPlaces] = useState([])

    const [weatherData,setWeatherData] = useState([]);
    const [filteredPlaces,setFilterdPlaces] = useState([]);

    const [childClicked ,setChildClicked] = useState(null);

    const[coordinates,setCoordinates] = useState({});
    const [bounds,setBounds] = useState({});

    const [isLoading,setIsLoading] = useState(false);

    const[type,setType] = useState('restaurants');
    const [rating,setRating] = useState('')
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords : {latitude,longitude}})=>{
            setCoordinates({latitude:latitude,longitude:longitude})
        })
    },[]);

    useEffect(()=>{
        const filteredPlaces = places.filter((place) => place.rating > rating);

        setFilterdPlaces(filteredPlaces);
    },[rating]);
    
    useEffect(()=>{
        if(bounds.sw && bounds.ne){
            setIsLoading(true);


            getWeatherData(coordinates.lat,coordinates.lng)
            .then((data)=>{
                setWeatherData(data)
            })

            getPlacesData(type,bounds.sw,bounds.ne)
            .then((data)=>{
                setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                setFilterdPlaces([])
                setIsLoading(false);
            })
        }
        
    },[type,bounds])
    
    
//     useEffect(()=>{
//         getPlacesData(bounds.sw,bounds.ne)
//         .then((data)=>{
// setPlaces(data);

//         })
//     },[coordinates,bounds]) 
    // const theme = createTheme()
    return (
        <>
        
            <CssBaseline/>
            <Header setCoordinates={setCoordinates}/>
            <Grid container spacing={3} style={{width:'100%',height:'100%'}}>

                <Grid item xs={12} md={4}>
                        <List places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        isLoading = {isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                        />
                </Grid>

                <Grid style={{width:'50%',height:'50%'}} item xs={12} md={8}>
                        <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                        weatherData={weatherData}
                        />
                </Grid>
            </Grid>
            
        </>
    );
}

export default App;