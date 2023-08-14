export class Routing {
  ROUTES = {
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
}
