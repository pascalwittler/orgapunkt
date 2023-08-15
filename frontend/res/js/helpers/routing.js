export class Routing {
  ROUTES = {
    '/': {
      module: 'Navigation',
      action: 'navigate',
    },
    '/employees/': {
      module: 'Employee',
      action: 'list',
    },
    '/employee/add/': {
      module: 'Employee',
      action: 'add',
    },
    '/employee/edit/': {
      module: 'Employee',
      action: 'edit',
    },
    '/employee/delete/': {
      module: 'Employee',
      action: 'delete',
    },
  };

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
