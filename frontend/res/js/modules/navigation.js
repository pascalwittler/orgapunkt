import { Api } from '../helpers/api.js';
import { Rendering } from '../helpers/rendering.js';

export class Navigation {
  async navigate() {
    const api = new Api();
    const response = await api.sendRequest('/employees');
    const employees = response.data;

    const sectionDomElement = document.querySelector('section[data-module="navigation"][data-action="navigate"]');
    const employeesListDomElement = sectionDomElement.querySelector('ul.employees');

    Rendering.clearHtml(employeesListDomElement);

    employees.forEach((employee) => {
      Rendering.insertHtml(employeesListDomElement, `
        <li class="employee">
          <span class="initials">${employee.identifier.toUpperCase()}</span>
          <span class="name">${employee.firstName} ${employee.lastName}</span>
          <span class="email">${employee.email}</span>
          <span class="controls">
            <a href="/employee/${employee.identifier.toLowerCase()}/edit/" class="edit">Edit</a>
            <a href="/employee/${employee.identifier.toLowerCase()}/delete/" class="remove">Delete</a>
          </span>
        </li>
      `);
    });
  }
}
