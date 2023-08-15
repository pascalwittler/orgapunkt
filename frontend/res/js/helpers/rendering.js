export class Rendering {
  constructor(module, action) {
    this.module = module;
    this.action = action;
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
