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
      path: /^\/employee\/add\/$/,
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
    return this.ROUTES[this.route].module;
  }

  get action() {
    return this.ROUTES[this.route].action;
  }
}
