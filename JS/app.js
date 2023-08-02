const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const timeOfDay = document.querySelector('img.time');
const weatherIcon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = (data) => {

    console.log(data);
    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    // destructuring properties
    const { cityDetails, weather } = data;

    // update details template:
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `

    // update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    weatherIcon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg';
    // } else {
    //     timeSrc = 'img/night.svg'
    // }

    timeOfDay.setAttribute('src', timeSrc);

    // remove d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

}

// NOW NEEDLESS DUE TO OOP
// const updateCity = async (city) => {
    
//     const cityDetails = await getCity(city);
//     const weather = await getWeather(cityDetails.Key);

//     return { cityDetails, weather }; // object shorthand notation

// };

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();

    // clear input field
    cityForm.reset();

    // update the ui with the new city
    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    // set localstorage 
    localStorage.setItem('location', city);
});

if(localStorage.getItem('location')){
    forecast.updateCity(localStorage.getItem('location'))
    .then(data => updateUI(data))
    .catch(err => console.log(err)); 
}