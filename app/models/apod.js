export default class Apod {
  constructor(data) {
    this.date = data.date;
    this.url = data.url;
    this.title = data.title;
    this.explanation = data.explanation;
    this.media_type = data.media_type;
  }
}