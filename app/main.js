import ApodController from "./components/apod-controller.js";

class App {
  constructor() {
    this.controllers = {
      apodCtrl: new ApodController()
    }
  }
}
window.app = new App();