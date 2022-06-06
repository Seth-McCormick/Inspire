import { ProxyState } from "../AppState.js";

class QuoteService {

    async getQuote() {

        const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/quotes')
        console.log(res.data);


        document.getElementById('quote').innerText = res.data.content
        document.getElementById('quote-author').innerText = res.data.author
    }


}

export const quoteService = new QuoteService()