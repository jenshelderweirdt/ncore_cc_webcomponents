import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `demo-alert`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class DemoAlert extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .alert {
          color:white;
          width:100%;
          height: 35px;
          font-size:1.2em;
          padding-top: 0.5em;
          text-align:center;
          position:fixed;
        }
        .alert:hover {
          cursor:pointer;
        }
        .danger {
          background-color:#FF4747;
        }
        .success {
          background-color:#7fff7f;
        }
      </style>
      <div on-click="hideAlertNotification" hidden$="[[hideNotification]]" class$="alert [[alertType]]">
        <slot name="content"></slot>
      </div>
    `;
  }
  static get properties() {
    return {
      hideNotification: {
        type: Boolean,
        value: true
      },
      life: {
        type: Number,
        value: 0
      },
      alertType: {
        type: String
      }
    };
  }

  hideAlertNotification() {
    this.hideNotification = true;
  }

  show(type) {
    this.alertType = type;
    this.hideNotification = false;
    setTimeout(() => {
      this.hideNotification = true;
    }, this.life)
  }
}

window.customElements.define('demo-alert', DemoAlert);
