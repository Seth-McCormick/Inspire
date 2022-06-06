import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"
import { Pop } from "../Utils/Pop.js"

function _drawWeather(tempType) {
    if (!tempType || typeof tempType != "string") {
        tempType = "Fahrenheit"
    }
    let weather = ProxyState.weather[tempType]

    // let template = ''
    // weather.forEach(w => w.template += Template)
    document.getElementById('temp').innerHTML = weather
}


export class WeatherController {
    constructor() {
        ProxyState.on('weather', _drawWeather)
        _drawWeather()
        this.getWeather()
    }

    async getWeather() {
        try {
            // add event listener
            ProxyState.on('weather', _drawWeather)

            await weatherService.getWeather()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }
    // getFahrenheit() {

    //     document.getElementById('weather-api').innerHTML = ProxyState.weather
    // }
    // getCelsius() {

    //     document.getElementById('weather-api').innerHTML = ProxyState.weather
    // }

    drawCelsius() {

        _drawWeather('Celsius')

    }

    // async getFahrenheit() {
    //     try {
    //         await weatherService.getFahrenheit()

    //     } catch (error) {
    //         console.error(error)
    //         Pop.toast(error.message, 'error')
    //     }

    // }

}