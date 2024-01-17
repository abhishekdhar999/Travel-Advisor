import axios from 'axios';
// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

  
export const getPlacesData = async (type,sw,ne)=>{
    try{
        const {data:{data}} =await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary,options`,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          
          },
  
          headers: {
            'X-RapidAPI-Key': 'f53696b666mshbb772a5efd11b12p1fdf53jsn617c35efc9a7',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

    return data;
    }catch (error){
console.log(error)
    }

}

export const getWeatherData = async (lat,lng)=>{
  try{
    const {data:{data}} = await axios.get('https://weather338.p.rapidapi.com/weather/forecast',{
      params: {
        date: '20200622',
        latitude: lat,
        longitude: lng,
        language: 'en-US',
        un : 'm'
    }
  });

  return data;
  }catch(error){
    console.log(error)
  }
}