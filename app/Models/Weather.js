export class Weather {
    constructor(weatherData) {
        this.degrees = weatherData.data
    }


    static TempTemplate(weather) {
        return ` <h2 onclick="app.weatherController.getCelsius()"></h2>`
    }

    get Template() {
        return `
         ${this.Fahrenheit}
         `

    }

    get Fahrenheit() {
        return `
         <h2  onclick="app.weatherController.getCelsius('${this.degrees}')"></h2>
         `

    }
    get Celsius() {
        return ` 
        <h2 onclick="app.weatherController.getFahrenheit('${this.degrees}')"></h2>
        `

    }

}
