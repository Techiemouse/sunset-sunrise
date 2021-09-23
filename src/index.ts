import axios from 'axios';

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

const getSunTime = (lat: number, long: number, date: string) => {
  return axios.get('https://api.sunrise-sunset.org/json?lat='+lat+'&lng='+long+'&date='+date)
  .then((response: { data: {results: SunTimes, status: string} }) => {
    console.log('The data is: ', response.data.results);
    return response.data;
  }, (error: string) => {
    console.log(error);
    return;
  });
};

getSunTime(36.7201600, -4.4203400, '2021-08-25');

const generateRandomLatLong = ():LatLong[] => {

  const latLongList: Array<LatLong> = [];

  for (let count = 0; count < 100; count++) {
    // -90 to + 90
    const lat = parseFloat((Math.random()*90).toFixed(7));
    // -180 to + 180
    const long = parseFloat((Math.random()*180).toFixed(7));

    latLongList.push({lat,long})
    console.log(count, lat, long);
  }
  return latLongList;
}
generateRandomLatLong();

module.exports = {
  getSunTime: getSunTime
};