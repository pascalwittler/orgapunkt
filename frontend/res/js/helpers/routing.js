export class Routing {
  ROUTES = [
    {
      path: /^\/$/,
      module: 'Navigation',
      action: 'navigate',
    },
    {
      path: /^\/employees\/$/,
      module: 'Employee',
      action: 'list',
    },
    {
      path: /^\/employees\/add\/$/,
      module: 'Employee',
      action: 'add',
    },
    {
      path: /^\/employee\/[a-z]{2,3}\/edit\/$/,
      module: 'Employee',
      action: 'edit',
    },
    {
      path: /^\/employee\/[a-z]{2,3}\/delete\/$/,
      module: 'Employee',
      action: 'delete',
    },
  ];

  constructor() {
    this.route = window.location.pathname.replace(/\/?$/, '/');
  }

  get module() {
    return this.findRoute().module;
  }

  get action() {
    return this.findRoute().action;
  }

  findRoute() {
    return this.ROUTES.find(possibleRoute => possibleRoute.path.test(this.route));
  }
}
