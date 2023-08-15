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
      if (section.dataset.module === this.module && section.dataset.action === this.action) {
        this.show(section);
      }
      else {
        this.hide(section);
      }
    });
  }
}
