import { Navigation } from '../modules/navigation.js';
import { Employee } from '../modules/employee.js';

export class Rendering {
  constructor(module, action) {
    this.module = module;
    this.action = action;

    this.executeAction();
    this.switchVisibleSection();
  }

  static clearHtml(wrapper) {
    wrapper.innerHTML = '';
  }

  static insertHtml(wrapper, htmlContent) {
    wrapper.innerHTML += htmlContent;
  }

  static show(domElement) {
    domElement.removeAttribute('hidden');
  }

  static hide(domElement) {
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
        this.constructor.show(section);
      }
      else {
        this.constructor.hide(section);
      }
    });
  }
}
