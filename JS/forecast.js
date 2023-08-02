// Converting to OOP

class Forecast{
    constructor(){
        this.key = 'h15ATrTrKB9NZz9gGEMhbgU0rP4FYJ9b';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
        return { cityDetails, weather }; // object shorthand notation

    }
    async getCity(city){
        const queryParameter = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + queryParameter);
        const data = await response.json();
        return data[0];
    }
    async getWeather(id){
        const queryParameter = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + queryParameter);
        const data = await response.json();
        return data[0];
    }
}

// Original code pre-OOP

// const key = 'h15ATrTrKB9NZz9gGEMhbgU0rP4FYJ9b';
// const key = 'v38AXjA6xjsAepjzWMTBO1Zfk1VhyC0p';

// get weather information
// const getWeather = async (id) => {
//     const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const queryParameter = `${id}?apikey=${key}`;

//     const response = await fetch(baseURL + queryParameter);
//     const data = await response.json();

//     console.log(data[0]);
//     return data[0];

// }

// get city information
// const getCity = async (city) => {

//     const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const queryParameter = `?apikey=${key}&q=${city}`;

//     const response = await fetch(baseURL + queryParameter);
//     const data = await response.json();

//     console.log(data[0]);
//     return data[0];

// };

// testing the functions
// getCity('barcelona').then(data => {
//         return getWeather(data.Key)
//     }).then(data => {
//         console.log(data);
//     }).catch(err => console.log(err));