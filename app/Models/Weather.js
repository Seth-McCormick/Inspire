export class Weather {
    constructor(weatherData) {
        this.degrees = weatherData.main.temp
        this.f = 1.8 * (this.degrees - 273.15) + 32
        this.c = this.degrees - 273.15
    }



    get Template() {
        return `
         ${this.Fahrenheit}
         `

    }

    get Fahrenheit() {
        return `
         <h2  onclick="app.weatherController.getCelsius()">${this.f}</h2>
         `

    }
    get Celsius() {
        return ` 
        <h2 onclick="app.weatherController.getFahrenheit()">${this.f}</h2>
        `

    }

}
