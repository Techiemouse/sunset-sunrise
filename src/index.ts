const axios = require('axios');

// interface sunTimes {
//   sunrise: string,
//   sunset: string,
//   solar_noon: string,
//   day_length: string,
//   civil_twilight_begin: string,
//   civil_twilight_end: string,
//   nautical_twilight_begin: string,
//   nautical_twilight_end: string,
//   astronomical_twilight_begin: string,
//   astronomical_twilight_end: string
// }

var getSunTime = (lat: number, long: number, date: string) => {
  return axios.get('https://api.sunrise-sunset.org/json?lat='+lat+'&lng='+long+'&date='+date)
  .then((response: { data: Array<Object>; }) => {
    var result = response.data
    console.log('The data is: ', result);
    return response.data;
  }, (error: any) => {
    console.log(error);
    return;
  });
};

getSunTime(36.7201600, -4.4203400, '2021-08-25');

module.exports = {
  getSunTime: getSunTime
};