import axios from 'axios';
import async from 'async'

interface LatLong {
  lat: number,
  long: number
}
interface SunTimes {
  sunrise: string,
  sunset: string,
  solar_noon: string,
  day_length: string,
  civil_twilight_begin: string,
  civil_twilight_end: string,
  nautical_twilight_begin: string,
  nautical_twilight_end: string,
  astronomical_twilight_begin: string,
  astronomical_twilight_end: string
}

const getSunTime = (latLong:LatLong) => {
  console.log('---', latLong.lat, latLong.long)
  axios.get('https://api.sunrise-sunset.org/json?lat='+latLong.lat+'&lng='+latLong.long)
  .then( (response: { data: {results: SunTimes, status: string} }) => {
  console.log('The data is: ', response.data.results);
    return response.data;
  } ).catch( ( error ) => {
    console.log( error );
  } )
};



const generateRandomLatLong = ():LatLong[] => {

  const latLongList: Array<LatLong> = [];

  for (let count = 0; count < 100; count++) {
    // -90 to + 90
    const lat = parseFloat((Math.random()*90).toFixed(7));
    // -180 to + 180
    const long = parseFloat((Math.random()*180).toFixed(7));

    latLongList.push({lat,long})
    //console.log(count, lat, long);
  }
  return latLongList;
}
const logSunTimes = () => {
  const randomLongLat = generateRandomLatLong();

  async.eachOfLimit(randomLongLat, 5, getSunTime, function (err) {
    if (err) throw err;
  });
  console.log('+++++++')
}
logSunTimes();
//getSunTime(36.7201600, -4.4203400);



module.exports = {
  getSunTime: getSunTime,
  generateRandomLatLong: generateRandomLatLong
};