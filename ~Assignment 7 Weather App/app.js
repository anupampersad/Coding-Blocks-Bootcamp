// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 7b02a47c5c19aef34a703ead188ea611

const weatherApi = {
    key: '7b02a47c5c19aef34a703ead188ea611',
    url: 'https://api.openweathermap.org/data/2.5/weather'
}

const input_box = document.getElementById('input_box');
const cityName = document.getElementById('city');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');
const weather_desc = document.getElementById('weather_desc');
const img = document.getElementById('img');
const humidity = document.getElementById('humidity');
const min_max = document.getElementById('min_max');


input_box.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        console.log(input_box.value);
        const city_name = input_box.value;
        document.querySelector('.weather_details').style.display = 'block'

        // Practice 
        // fetch(`${weatherApi.url}?q=${city}&appid=${weatherApi.key}&units=metric`)
        //     .then(weather => {
        //         return weather.json();
        //     }).then((weather_data) => {

        //         const min = weather_data.main.temp_min
        //         console.log(min)

        //     });

        getWeatherReport(city_name)




        input_box.value = ''
    }
})

// Get Weather Report
function getWeatherReport(city) {

    fetch(`${weatherApi.url}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then((weather_data) => {
            
            // SETTING ALL THE PARAMETERS
            const min_temperature = weather_data.main.temp_min
            const max_temperature = weather_data.main.temp_max
            min_max.innerHTML = `${min_temperature-1}&deg;C (min) / ${max_temperature+1}&deg;C (max)`

            temp.innerHTML = `${weather_data.main.temp}&deg;C`
            cityName.innerText = `${city}, ${weather_data.sys.country}`
            weather.innerText = weather_data.weather[0].main
            
            humidity.innerText = `Humidity : ${weather_data.main.humidity}%`

            const icon_code = weather_data.weather[0].icon
            img.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon_code}@2x.png"></img>`

            // SETTING DATE AND TIME OF PLACE Using Date Function we created
            const todayDate = new Date();
            date.innerText= dateManage(todayDate)

            // Setting Background image
            const weather_status = weather_data.weather[0].main
            document.body.style.backgroundImage = `url(images/${weather_status}.jpg)`

            
            showWeatherReport(weather_data)

        }).catch(()=>{
            alert('Invalid Input')
        })

}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather)

}

// Setting Date Function
function dateManage (DateObj){
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    const year = DateObj.getFullYear();
    const month = months[DateObj.getMonth()];
    const date = DateObj.getDate();
    let day = days[DateObj.getDay()];

    return `${date} ${month} (${day}) ${year}`
}