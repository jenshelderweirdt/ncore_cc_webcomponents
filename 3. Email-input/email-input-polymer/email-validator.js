import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * `email-validator`
 * Input that validates email with a regex
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class EmailValidator extends PolymerElement {
  static get template() {
    return html(`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Email validator!</h2>
      <input id="email" type="text" on-blur="validateEmail"/>
      <p style="color:red" hidden$="[[!displayError(isEmailValid, showError)]]">Invalid Email!</p>
    `);
  }
  static get properties() {
    return {
      isEmailValid: {
        type: Boolean,
        value: false,
        notify: true
      },
      showError: {
        type: Boolean,
        value: false,
        notify: true
      }
    };
  }

  displayError(_isEmailValid, _showError) {
    return !_isEmailValid && _showError;
  }


  validateEmail() {
    let inputValue = this.shadowRoot.querySelector('#email').value;
    this.showError = inputValue.length > 0;
    this.isEmailValid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue));
  }
}

window.customElements.define('email-validator', EmailValidator);
