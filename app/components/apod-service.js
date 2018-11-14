import Apod from "../models/apod.js";

export default class ApodService {
  constructor() {
    console.log('SERVICE created')
  }
  getApod(draw, date) {
    let requestString = 'apod?api_key=' + APIkey
    if (date) {
      requestString += '&date=' + date
    }
    _nasaAPI.get(requestString)
      .then(response => {
        apod = new Apod(response.data)
        draw(apod)
      })
      .catch(err => {
        console.log('error with API query');
      })

  }
}
// PRIVATE
let _nasaAPI = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/'
})
let APIkey = 'yoIDb9YcnnGEZeeWCThST2KVNImqy5WKUorGqeYK';
let apod;