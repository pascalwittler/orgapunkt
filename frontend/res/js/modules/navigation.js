import { Api } from '../helpers/api.js';

export class Navigation {
  async navigate() {
    const api = new Api();
    const response = await api.sendRequest('/employees');
    const employees = response.data;

    const sectionDomElement = document.querySelector('section[data-module="navigation"][data-action="navigate"]');
    const employeesListDomElement = sectionDomElement.querySelector('ul.employees');

  }
}
