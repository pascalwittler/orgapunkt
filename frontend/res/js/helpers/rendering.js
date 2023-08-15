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
}
