import { ProxyState } from "../AppState.js";

class ImageService {

    async getImage() {

        console.log('hit image service');
        const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/images')
        console.log('hello', res);
        // ProxyState.image = res.data.data.map(img => img.images.downsized_large.url)


        document.getElementById('img-source').innerText = res.data.tags
        document.body.style.backgroundImage = "url(" + res.data.largeImgUrl + ")";

        // document.getElementById('image-api').backgroundImage = "url('')"
        console.log(res.data.url);
        // document.getElementById('images').innerHTML = res.data.query

    }
}


export const imageService = new ImageService()