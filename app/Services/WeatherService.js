import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";

class WeatherService {

    async getWeather() {
        // console.log('hit weather service');
        const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/weather')
        console.log(res.data.main.temp);
        // let F = 1.8 * (temp - 273.15) + 32
        // let C = temp - 273.15
        ProxyState.weather = new Weather(res.data)




        // ProxyState.weather = ProxyState.weather, new Weather()
        // if (1.8 * (temp - 273.15) + 32) {
        //     document.getElementById('weather-api').innerText = C.toFixed(0)
        // } if (temp - 273.15) {
        //     document.getElementById('weather-api').innerText = F.toFixed(0)
        // }
        // document.getElementById('weather-api').innerText = F.toFixed(0)
        // document.getElementById('weather-api').innerHTML = F.toFixed(0)
    }

    // async getCelsius() {
    //     const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/weather')
    //     let temp = res.data.main.temp
    //     let C = temp - 273.15
    //     let F = 1.8 * (temp - 273.15) + 32
    //     document.getElementById('weather=api').innerText = C
    // }

    // getCelsius() {
    //     let c = ProxyState.weather
    //     let C = c - 273.15
    //     document.getElementById('weather-api').innerHTML = C.toFixed(0)
    // }

    // getFahrenheit() {
    //     let f = ProxyState.weather
    //     let F = 1.8 * (f - 273.15) + 32
    //     document.getElementById('weather-api').innerHTML = F.toFixed(0)
    // }

}




export const weatherService = new WeatherService()