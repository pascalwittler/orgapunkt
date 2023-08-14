export class Routing {
  constructor() {
    this.route = window.location.pathname.replace(/\/?$/, '/');
  }
}
