// const key = 'h15ATrTrKB9NZz9gGEMhbgU0rP4FYJ9b';
const key = 'v38AXjA6xjsAepjzWMTBO1Zfk1VhyC0p';

// get weather information
const getWeather = async (id) => {
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const queryParameter = `${id}?apikey=${key}`;

    const response = await fetch(baseURL + queryParameter);
    const data = await response.json();

    console.log(data[0]);
    return data[0];


}

// get city information
const getCity = async (city) => {

    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const queryParameter = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseURL + queryParameter);
    const data = await response.json();

    console.log(data[0]);
    return data[0];

};

// testing the functions
// getCity('barcelona').then(data => {
//         return getWeather(data.Key)
//     }).then(data => {
//         console.log(data);
//     }).catch(err => console.log(err));