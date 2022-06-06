import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { ToDoController } from "./Controllers/ToDoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {

  todoController = new ToDoController()

  imageController = new ImageController()

  weatherController = new WeatherController()

  quoteController = new QuoteController()


}

window["app"] = new App();
