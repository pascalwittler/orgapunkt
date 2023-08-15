export class Rendering {
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
