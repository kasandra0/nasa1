import ApodService from "./apod-service.js";

let _apodService = new ApodService();
export default class ApodController {
  constructor() {
    _apodService.getApod(drawApod);
  }
  getSpecificDate(event) { // 'yyyy-mm-dd'
    event.preventDefault();
    let date = event.target.date.value;
    _apodService.getApod(drawApod, date);
  }
}
function drawApod(apodObject) {
  let template = '';
  if (apodObject.media_type == 'video') {
    template = `<iframe src="${apodObject.url}"/>
  </iframe>`;
  }
  if (apodObject.media_type == 'image') {
    template = `<img src ="${apodObject.url}"/>`
  }
  template += `
        <h3>${apodObject.title}</h3>
        <p>${apodObject.explanation}</p>

  `
  document.getElementById('apod-frame').innerHTML = template;
}