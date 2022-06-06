import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"
import { Pop } from "../Utils/Pop.js"

function _drawWeather() {
    // debugger
    let weather = ProxyState.weather
    // let template = ''
    // weather.forEach(w => w.template += Template)
    document.getElementById('weather-api').innerHTML = weather.Fahrenheit
}


export class WeatherController {
    constructor() {
        ProxyState.on('weather', _drawWeather)
        _drawWeather()
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }
    getFahrenheit() {

        document.getElementById('weather-api').innerHTML = ProxyState.weather
    }
    getCelsius() {

        document.getElementById('weather-api').innerHTML = ProxyState.weather
    }

    // async getCelsius() {
    //     try {

    //         await weatherService.getCelsius()
    //     } catch (error) {
    //         console.error(error)
    //         Pop.toast(error.message, 'error')
    //     }
    // }

    // async getFahrenheit() {
    //     try {
    //         await weatherService.getFahrenheit()

    //     } catch (error) {
    //         console.error(error)
    //         Pop.toast(error.message, 'error')
    //     }

    // }

}