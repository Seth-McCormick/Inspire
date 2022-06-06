import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"
import { Pop } from "../Utils/Pop.js"






export class ImageController {
    constructor() {
        // console.log('controller connected');
        this.getImage()
    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }

}