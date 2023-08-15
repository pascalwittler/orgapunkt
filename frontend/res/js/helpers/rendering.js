import { Navigation } from '../modules/navigation.js';
import { Employee } from '../modules/employee.js';

export class Rendering {
  constructor(module, action) {
    this.module = module;
    this.action = action;

    this.executeAction();
    this.switchVisibleSection();
  }

  insertHtml(wrapper, htmlContent) {
    wrapper.innerHTML = htmlContent;
  }

  show(domElement) {
    domElement.removeAttribute('hidden');
  }

  hide(domElement) {
    domElement.setAttribute('hidden', '');
  }

  executeAction() {
    (eval('new ' + (this.module) + '()'))[this.action]();
  }

  switchVisibleSection() {
    const sections = document.body.querySelectorAll(`section[data-module][data-action]`);

    sections.forEach((section) => {
      if (
        section.dataset.module === this.module.toLowerCase()
        && section.dataset.action === this.action.toLowerCase()
      ) {
        this.show(section);
      }
      else {
        this.hide(section);
      }
    });
  }
}
